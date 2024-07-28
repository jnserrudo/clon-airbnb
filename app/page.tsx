import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";
import getListings, { IListingsParams } from "@/app/actions/getListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";
import { Container } from "./components/Container";
import { useSearchParams } from 'next/navigation';

interface HomeProps {
  searchParams: IListingsParams
};

const Home = async () => {
  const searchParams = useSearchParams();
  
  const listings = await getListings({
    userId: searchParams?.get('userId') || undefined,
    roomCount: searchParams?.get('roomCount') ? Number(searchParams.get('roomCount')) : undefined,
    guestCount: searchParams?.get('guestCount') ? Number(searchParams.get('guestCount')) : undefined,
    bathroomCount: searchParams?.get('bathroomCount') ? Number(searchParams.get('bathroomCount')) : undefined,
    startDate: searchParams?.get('startDate') || undefined,
    endDate: searchParams?.get('endDate') || undefined,
    locationValue: searchParams?.get('locationValue') || undefined,
    category: searchParams?.get('category') || undefined,
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
  )
}

export default Home;
