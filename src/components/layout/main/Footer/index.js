import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import Section from 'src/components/common/Section';
import { apiURL } from 'src/utils/env';
import Certificates from '../Certificates';
import Contact from '../Contact';
import Copyright from '../Copyright';
import FooterLinks from '../FooterLinks';
import styles from './Footer.module.scss';

export default function Footer({ content, contact }) {
  return (
    <footer className={styles.footer}>
      {
        contact && (
          <Section pb="80" mb="144">
            <Contact content={content.footer} info={content.info} />
          </Section>
        )
      }
      <Section mt="-80" style={{ position: 'absolute', width: '100%', zIndex: '1' }}>
        <Certificates content={content.footer.certificates} />
      </Section>
      <FooterLinks content={content.footer.footer} />
      <Copyright content={content.footer.footer} />
    </footer>
  )
}
