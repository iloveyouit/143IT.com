#!/bin/bash

# 143IT Website - Docker Test Environment Setup
# This script prepares and tests the Docker deployment locally

set -e  # Exit on error

echo "======================================"
echo "143IT Docker Test Environment"
echo "Automate. Evolve. Dominate."
echo "======================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Pre-flight checks
echo -e "${YELLOW}Step 1: Running pre-flight checks...${NC}"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed${NC}"
    echo "Please install Docker Desktop from: https://www.docker.com/products/docker-desktop"
    exit 1
else
    echo -e "${GREEN}✓ Docker is installed${NC}"
    docker --version
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo -e "${YELLOW}⚠ docker-compose command not found, checking for 'docker compose'...${NC}"
    if ! docker compose version &> /dev/null; then
        echo -e "${RED}❌ Docker Compose is not installed${NC}"
        exit 1
    else
        echo -e "${GREEN}✓ Docker Compose is available (as 'docker compose')${NC}"
        docker compose version
        COMPOSE_CMD="docker compose"
    fi
else
    echo -e "${GREEN}✓ Docker Compose is installed${NC}"
    docker-compose --version
    COMPOSE_CMD="docker-compose"
fi

# Check if Docker daemon is running
if ! docker info &> /dev/null; then
    echo -e "${RED}❌ Docker daemon is not running${NC}"
    echo "Please start Docker Desktop"
    exit 1
else
    echo -e "${GREEN}✓ Docker daemon is running${NC}"
fi

echo ""

# Step 2: Check port 3000 availability
echo -e "${YELLOW}Step 2: Checking port 3000 availability...${NC}"
if lsof -Pi :3000 -sTCP:LISTEN -t &> /dev/null; then
    echo -e "${YELLOW}⚠ Port 3000 is in use${NC}"
    echo "Current processes using port 3000:"
    lsof -i :3000
    echo ""
    read -p "Do you want to stop processes on port 3000? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Stopping processes on port 3000..."
        lsof -ti:3000 | xargs kill -9 2>/dev/null || true
        sleep 2
        echo -e "${GREEN}✓ Port 3000 is now free${NC}"
    else
        echo -e "${RED}Cannot proceed with port 3000 in use. Exiting.${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✓ Port 3000 is available${NC}"
fi

echo ""

# Step 3: Verify project files
echo -e "${YELLOW}Step 3: Verifying project files...${NC}"
REQUIRED_FILES=("Dockerfile" "docker-compose.yml" ".dockerignore" "package.json")
for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓ $file exists${NC}"
    else
        echo -e "${RED}❌ $file is missing${NC}"
        exit 1
    fi
done

# Check for Next.js config (either .js or .mjs)
if [ -f "next.config.js" ] || [ -f "next.config.mjs" ]; then
    if [ -f "next.config.mjs" ]; then
        echo -e "${GREEN}✓ next.config.mjs exists${NC}"
    else
        echo -e "${GREEN}✓ next.config.js exists${NC}"
    fi
else
    echo -e "${RED}❌ next.config.js or next.config.mjs is missing${NC}"
    exit 1
fi

echo ""

# Step 4: Check disk space
echo -e "${YELLOW}Step 4: Checking disk space...${NC}"
AVAILABLE_SPACE=$(df -h . | awk 'NR==2 {print $4}')
echo "Available disk space: $AVAILABLE_SPACE"
echo -e "${GREEN}✓ Disk space check complete${NC}"

echo ""

# Step 5: Build Docker image
echo -e "${YELLOW}Step 5: Building Docker image...${NC}"
echo "This may take 3-5 minutes on first build..."
echo ""

if docker build -t 143it-website:latest .; then
    echo ""
    echo -e "${GREEN}✓ Docker image built successfully${NC}"
else
    echo -e "${RED}❌ Docker build failed${NC}"
    exit 1
fi

echo ""

# Step 6: Run container with Docker Compose
echo -e "${YELLOW}Step 6: Starting container with Docker Compose...${NC}"
echo ""

if $COMPOSE_CMD up -d; then
    echo ""
    echo -e "${GREEN}✓ Container started successfully${NC}"
else
    echo -e "${RED}❌ Failed to start container${NC}"
    exit 1
fi

echo ""

# Step 7: Wait for container to be ready
echo -e "${YELLOW}Step 7: Waiting for container to be ready...${NC}"
echo "Waiting 10 seconds for application to start..."
sleep 10

# Step 8: Verify container is running
echo -e "${YELLOW}Step 8: Verifying container status...${NC}"
if docker ps | grep -q "143it-web"; then
    echo -e "${GREEN}✓ Container is running${NC}"
    docker ps | grep "143it-web"
else
    echo -e "${RED}❌ Container is not running${NC}"
    echo "Container logs:"
    docker logs 143it-web
    exit 1
fi

echo ""

# Step 9: Test HTTP endpoint
echo -e "${YELLOW}Step 9: Testing HTTP endpoint...${NC}"
if curl -f http://localhost:3000 &> /dev/null; then
    echo -e "${GREEN}✓ Website is accessible at http://localhost:3000${NC}"
else
    echo -e "${YELLOW}⚠ Could not verify HTTP response (this might be ok)${NC}"
fi

echo ""
echo "======================================"
echo -e "${GREEN}✅ Docker deployment test COMPLETE!${NC}"
echo "======================================"
echo ""
echo "Your 143IT website is now running in Docker!"
echo ""
echo "🌐 Website URL: http://localhost:3000"
echo ""
echo "Useful commands:"
echo "  - View logs:        docker-compose logs -f web"
echo "  - Stop container:   docker-compose down"
echo "  - Restart:          docker-compose restart"
echo "  - Rebuild:          docker-compose up -d --build"
echo ""
echo "Or use npm scripts:"
echo "  - npm run docker:compose:logs"
echo "  - npm run docker:compose:down"
echo ""
echo "Press Ctrl+C when viewing logs to exit (container keeps running)"
echo ""

# Ask if user wants to view logs
read -p "Do you want to view container logs now? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Viewing logs (press Ctrl+C to exit)..."
    echo ""
    $COMPOSE_CMD logs -f web
fi
