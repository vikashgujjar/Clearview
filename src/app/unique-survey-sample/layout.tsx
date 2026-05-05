import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unique Survey Sample | Clearview Land Survey',
  description: 'Explore the utility and importance of survey documents for new homeowners even after purchase.',
};

export default function UniqueSurveySampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
