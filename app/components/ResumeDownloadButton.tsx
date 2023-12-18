'use client';

const ResumeDownloadButton = () => {
  return (
    <a
      href="https://drive.google.com/u/0/uc?id=1Di45VQkiPhEZAl45GMspXGA4md3RzBUQ&export=download"
      download
      className="h-7 pl-2 hover:text-neutral-700 dark:hover:text-green-600"
    >
      download my resume
    </a>
  );
};

export default ResumeDownloadButton;
