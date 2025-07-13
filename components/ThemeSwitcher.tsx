import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Palette } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      name: 'light',
      icon: <Sun className='h-4 w-4 text-yellow-500' />,
      label: 'Light',
    },
    {
      name: 'dark',
      icon: <Moon className='h-4 w-4 text-blue-300' />,
      label: 'Dark',
    },
    {
      name: 'purple',
      icon: <Palette className='h-4 w-4 text-purple-400' />,
      label: 'Purple',
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='h-10 w-10 rounded-full relative overflow-hidden'
        >
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='flex items-center justify-center'
          >
            {theme === 'dark' && <Moon className='h-5 w-5 text-blue-300' />}
            {theme === 'light' && <Sun className='h-5 w-5 text-yellow-500' />}
            {theme === 'purple' && (
              <Palette className='h-5 w-5 text-purple-400' />
            )}
          </motion.div>
          <span className='sr-only'>Toggle theme</span>
          <div className='absolute inset-0 bg-gradient-to-r from-transparent to-primary/10' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='p-2 bg-card border-border rounded-lg shadow-lg'
      >
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors ${
              theme === t.name
                ? 'bg-primary/20 text-primary'
                : 'hover:bg-accent'
            }`}
          >
            {t.icon}
            <span>{t.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
