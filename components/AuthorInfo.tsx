import Image from "next/image";
import { User } from "lucide-react";

interface AuthorInfoProps {
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
}

export default function AuthorInfo({ author }: AuthorInfoProps) {
  return (
    <div className="bg-background/50 backdrop-blur-sm border border-accent-1/20 rounded-xl p-8">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          {author.avatar ? (
            <Image
              src={author.avatar}
              alt={author.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full border-2 border-accent-1/30 object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-accent-1/10 border-2 border-accent-1/30 flex items-center justify-center">
              <User className="h-10 w-10 text-accent-1" />
            </div>
          )}
        </div>

        {/* Author Details */}
        <div className="flex-1">
          <h3 className="text-xl font-heading font-bold mb-2">
            About {author.name}
          </h3>
          <p className="text-text/70 leading-relaxed">
            {author.bio ||
              `${author.name} is a technical writer and IT automation expert at 143IT, specializing in cloud infrastructure, DevOps practices, and AI integration.`}
          </p>
        </div>
      </div>
    </div>
  );
}
