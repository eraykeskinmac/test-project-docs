import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { UserIcon } from 'lucide-react';

export async function baseOptions(): Promise<BaseLayoutProps> {
  const session = await getServerSession();
  const userEmail = session?.user?.email;

  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={24} height={24} />
          <span>Documentation</span>
        </div>
      ),
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      // User email in navbar
      ...(userEmail
        ? [
            {
              type: 'custom' as const,
              children: (
                <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-fd-muted-foreground border rounded-md">
                  <UserIcon className="size-4" />
                  <span>{userEmail}</span>
                </div>
              ),
              secondary: true,
            },
          ]
        : []),
    ],
  };
}
