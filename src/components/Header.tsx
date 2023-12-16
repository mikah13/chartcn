import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

import React from 'react';
import { Button } from './ui/button';
import { Github, GithubIcon } from 'lucide-react';
import { Icons } from './Icons';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center'>
        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <nav className='flex items-center'>
            <Link href={'/'} target='_blank' rel='noreferrer'>
              <Button size='icon' variant='ghost'>
                <Icons.gitHub className='h-5 w-5' />
              </Button>
            </Link>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
