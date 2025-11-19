import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Layout({ children }: LayoutProps<'/docs'>) {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <DocsLayout tree={source.pageTree} {...(await baseOptions())}>
      {children}
    </DocsLayout>
  );
}
