import { DestinationDirectory } from "@/src/modules/Destinasi/DestinationDirectory";
import { DestinationPageHeader } from "@/src/modules/Destinasi/DestinationPageHeader";
import { destinations } from "@/src/modules/Destinasi/destinationData";

export default function DestinasiPage() {
  return (
    <>
      <DestinationPageHeader />
      <DestinationDirectory destinations={destinations} />
    </>
  );
}
