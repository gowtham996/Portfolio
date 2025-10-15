import { PortfolioLayout } from '@/components/PortfolioLayout';
import { PersonalIntro } from '@/components/PersonalIntro';

const Index = () => {
  return (
    <PortfolioLayout showProjects={false}>
      <PersonalIntro />
    </PortfolioLayout>
  );
};

export default Index;
