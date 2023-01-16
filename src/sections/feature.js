/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Smart',
    title: 'ikas Hızıyla E-Ticaret',
    text:
      'ikas hızında e-ticaret sitenizi kurun ve dönüşümlerinizi artırın! Özel olarak optimize edilmiş e-ticaret siteniz ile çok daha hızlı satışlar yapın..',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Performance',
    title: 'E-İhracat',
    text:
      'ikas ile tüm dünyaya tek panelden satış yapabilirsiniz! Sınırsız dil seçeneği ile global bir marka oluşturmanın tam zamanı..',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Content',
    title: '7/24 Yanınızdayız',
    text:
      'Alanında uzman ekibimizden 7/24 destek alarak sürecinizi yönetebilirsiniz. Birebir yapılan eğitimlerimizle hızlıca e-ticaret sitenizi kurun..',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Customization',
    title: 'Çok Kanallı Satış',
    text:
      'E-ticaret, pazaryeri, fiziksel mağaza ve e-ihracat satış kanallarınızı tek panelden yönetebilirsiniz. Çift yönlü pazaryeri entegrasyonları ile ticaretinizi kolaylaştırın..',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Productivity',
    title: 'Otomasyonlar & Pazarlama',
    text:
      'Sepet hatırlatma, upsell ve cross sell özellikleri ile satışlarınızı artırın. GA4, GTM, Instagram ve Facebook ile tam entegre olun, hem de sadece birkaç tık ile..',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Support',
    title: 'Customer Support',
    text:
      'Get your blood tests delivered at let home collect sample from the victory of the managements.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Kalite Özellikleri"
          title="İşletmenizi Benzersiz
          Avantajlar ile Büyütün."
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
