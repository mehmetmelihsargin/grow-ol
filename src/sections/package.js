/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    name: 'Bronze',
    description: 'For Small teams or office',
    priceWithUnit: '₺29.99/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '%2.49 Sanal POS Oranı',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'SEO Uyumlu Işık Hızında E-Ticaret Sitesi.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Sınırsız Ürün, Trafik ve Web Alanı',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ücretsiz SSL Sertifikası',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Kampanya Kurguları(3 Al, 2 Öde vb.)',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Yurtiçi Kargo ile 29.90 TL’den Başlayan Kargo Gönderimi',
        isAvailable: true,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'Gold',
    // description: 'For startup enterprise',
    priceWithUnit: '₺59.99/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '%1.99 Sanal POS Oranı',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Start Paketindeki Tüm Özellikler.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Entegre E-İhracat Özellikleri',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Sepet Hatırlatma E-Postaları',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Raporlar',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Yorum Hatırlatma E-Postaları',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Ürün Kişiselleştirme',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Farklı Kurlarda Fiyatlama',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Yabancı Dil ve Yurtdışı Satış',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Dijital Ürün',
        isAvailable: true,
      },
    ],
  },
  {
    header: 'mal',
    name: 'Platin',
    // description: 'For startup enterprise',
    priceWithUnit: '₺89.99/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '%1.79 Sanal POS Oranı',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Grow Paketindeki Tüm Özellikler.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Trendyol ve Hepsiburada entegrasyonları',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Tek Panelden Çoklu E-Ticaret Sitesi Açabilme',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Gelişmiş E-Posta Kurguları',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Cross-Sell / Up-Sell',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Mağazadan Teslimat',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Gelişmiş Raporlar',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Görselli Ürün Yorumları',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Abonelik ile Satış',
        isAvailable: false,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'B2B / Kurumsal Satış',
        isAvailable: false,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Paket Ürün (Bundle)',
        isAvailable: false,
      },
    ],

  },

];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="E-Ticaret Paketleri ve Fiyatları"
          slogan="Peşin fiyatına 12 taksit ödeme imkanı."
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
