export default function SocialLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: any;
}) {
  return (
    <a href={href} className='text-gray-400 hover:text-gray-500'>
      <span className='sr-only'>{title}</span>
      <svg
        className='h-6 w-6'
        fill='currentColor'
        viewBox='0 0 24 24'
        aria-hidden='true'>
        {children}
      </svg>
    </a>
  );
}
