import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'gabrielbianchi.com',
    href: 'https://gabrielbianchi.com',
  },
  {
    social: 'email',
    link: 'gdbianchii@gmail.com',
    href: 'mailto:gdbianchii@gmail.com',
  },
  {
    social: 'github',
    link: 'dBianchii',
    href: 'https://github.com/itsnitinr',
  },
  {
    social: 'linkedin',
    link: 'Gabriel Bianchi',
    href: 'https://www.linkedin.com/in/gabriel-bianchi-8137ab212/',
  },
  {
    social: 'twitter',
    link: 'GabrielOnTheBlockchain',
    href: 'https://twitter.com/gdbianchii',
  },
  {
    social: 'instagram',
    link: 'gdbianchii',
    href: 'https://www.instagram.com/gdbianchii',
  },
  //{
  //  social: 'telegram',
  //  link: 'Gabriel Bianchi',
  //  href: 'https://t.me/gabrielbianchi',
  //},
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
