'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Links } from '@/data/links';
import Link from 'next/link';
// import { useToast } from '@/hooks/use-toast';
import { Briefcase, Download, FileText, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const AboutSection = () => {
  const resumeUrl = Links.resume;
  //   const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // const handledownload = () => {
  //   toast('Downloading Resume');
  // };

  return (
    <section id='about' className='py-14 relative bg-background'>
      <span className='absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10'></span>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2
          className='section-heading text-center mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-14'>
          {/* Content Column */}
          <motion.div
            className='lg:col-span-8 space-y-6'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className='text-xl font-semibold mb-2 flex items-center gap-2'>
                <FileText className='w-5 h-5 text-primary' /> Bio
              </h3>
              <p className='text-muted-foreground'>
                Software engineering student with Link passion for creating
                innovative solutions. Specializing in full-stack development, I
                combine technical expertise with creative problem-solving to
                build user-centric applications.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Card className='h-full border-primary/10 bg-card/50 backdrop-blur-sm'>
                  <CardContent className='pt-6'>
                    <h3 className='text-lg font-semibold mb-3 flex items-center gap-2'>
                      <GraduationCap className='w-5 h-5 text-primary' />{' '}
                      Education
                    </h3>
                    <div className='space-y-2'>
                      <p className='font-medium'>BSc in Software Engineering</p>
                      <p className='text-sm text-muted-foreground'>
                        University of Arizona
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        2022 - Present
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        Dean List (2023)
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Card className='h-full border-primary/10 bg-card/50 backdrop-blur-sm'>
                  <CardContent className='pt-6'>
                    <h3 className='text-lg font-semibold mb-3 flex items-center gap-2'>
                      <Briefcase className='w-5 h-5 text-primary' /> Experience
                    </h3>
                    <div className='space-y-4'>
                      <div>
                        <p className='font-medium'>
                          Full Stack Developer Intern
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Twist Digital
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Since March 2025
                        </p>
                      </div>
                      <div>
                        <p className='font-medium'>Graphic Designer</p>
                        <p className='text-sm text-muted-foreground'>
                          SLIIT Media Unit
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          Freelance
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className='lg:col-span-4 flex flex-col items-center lg:items-start gap-6'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className='relative'
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className='w-40 h-40 border-4 border-primary/20'>
                <AvatarImage
                  src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
                  alt='John Doe'
                  loading='lazy'
                />
                <AvatarFallback>AZ</AvatarFallback>
              </Avatar>
              <div className='absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium'>
                3.41 GPA
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='text-center lg:text-left'
            >
              <h3 className='text-2xl font-bold'>John Doe</h3>
              <p className='text-muted-foreground'>
                Software Engineering Student
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='flex flex-wrap gap-2 justify-center lg:justify-start'
            >
              <Badge variant='outline' className='bg-primary/10'>
                React
              </Badge>
              <Badge variant='outline' className='bg-primary/10'>
                Node
              </Badge>
              <Badge variant='outline' className='bg-primary/10'>
                UI/UX
              </Badge>
              <Badge variant='outline' className='bg-primary/10'>
                Full Stack
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className='gap-2' asChild>
                <Link href={resumeUrl} download='Demo.pdf'>
                  <Download className='w-4 h-4' />
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
