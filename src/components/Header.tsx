import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

import React from 'react';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center'>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <nav className='flex items-center'>
            <Link href={'/'} target='_blank' rel='noreferrer'>
              {/* <div
            className={cn(
              buttonVariants({
                variant: 'ghost',
              }),
              'w-9 px-0'
            )}
          >
            <Icons.gitHub className='h-4 w-4' />
            <span className='sr-only'>GitHub</span>
          </div> */}
            </Link>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
