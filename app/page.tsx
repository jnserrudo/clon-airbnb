import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";
import getListings, { IListingsParams } from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { Metadata } from 'next';
import {Container} from './components/Container';

import ClientOnly from './components/ClientOnly';

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

interface HomeProps {
  searchParams: {
    userId?: string;
    roomCount?: string;
    guestCount?: string;
    bathroomCount?: string;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
  };
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings({
    userId: searchParams?.userId,
    roomCount: searchParams?.roomCount ? Number(searchParams.roomCount) : undefined,
    guestCount: searchParams?.guestCount ? Number(searchParams.guestCount) : undefined,
    bathroomCount: searchParams?.bathroomCount ? Number(searchParams.bathroomCount) : undefined,
    startDate: searchParams?.startDate,
    endDate: searchParams?.endDate,
    locationValue: searchParams?.locationValue,
    category: searchParams?.category,
  });

  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
          pt-24
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
