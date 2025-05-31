import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type { ReactNode } from 'react';

type FeatureItem = {
  title: string;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cryptomator',
    link: '/desktop/setup',
    description: (
      <>
        Documentation for Cryptomator on Windows, macOS, and Linux. 
        Learn how to create vaults, manage your encrypted files, and configure advanced settings.
      </>
    ),
  },
  {
    title: 'Cryptomator for Android',
    link: '/android/setup',
    description: (
      <>
        Documentation for Cryptomator on Android devices. 
        Access your encrypted files on the go with our mobile application.
      </>
    ),
  },
  {
    title: 'Cryptomator for iOS',
    link: '/ios/setup',
    description: (
      <>
        Documentation for Cryptomator on iPhone and iPad. 
        Secure access to your encrypted files from your iOS device.
      </>
    ),
  },
  {
    title: 'Cryptomator Hub',
    link: '/hub/introduction',
    description: (
      <>
        Team and organization solutions with Cryptomator Hub. 
        Manage user access, deploy for your organization, and handle vault recovery.
      </>
    ),
  },
  {
    title: 'Security',
    link: '/security/security-target',
    description: (
      <>
        Deep dive into Cryptomator&apos;s security architecture, encryption methods, 
        and best practices for keeping your data safe.
      </>
    ),
  },
];

function Feature({title, description, link}: FeatureItem) {
  return (
    <div className="card" style={{height: '100%'}}>
      <div className="card__header">
        <Heading as="h3">
          <Link to={link} className="text--no-decoration">
            {title}
          </Link>
        </Heading>
      </div>
      <div className="card__body">
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <Link
          className="button button--secondary button--block"
          to={link}>
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className="container padding-vert--lg">
      <div className="row">
        <div className="col col--4 margin-bottom--lg">
          <Feature {...FeatureList[0]} />
        </div>
        <div className="col col--4 margin-bottom--lg">
          <Feature {...FeatureList[1]} />
        </div>
        <div className="col col--4 margin-bottom--lg">
          <Feature {...FeatureList[2]} />
        </div>
      </div>
      <div className="row">
        <div className="col col--6 margin-bottom--lg">
          <Feature {...FeatureList[3]} />
        </div>
        <div className="col col--6 margin-bottom--lg">
          <Feature {...FeatureList[4]} />
        </div>
      </div>
    </section>
  );
}
