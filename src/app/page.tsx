import { PageHeader } from '#/ui/page-header';

export default function Home() {
  return (
    <section>
      <div className="py-32 md:py-44 lg:py-56">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title="Small team of big dreamers"
            description="We are a woman-owned digital marketing agency based in Los Angeles. We help brands achieve better outcomes online through meaningful and sustainable initiatives."
          >
            Digital Marketing Superpowers
          </PageHeader>
        </div>
      </div>
    </section>
  );
}
