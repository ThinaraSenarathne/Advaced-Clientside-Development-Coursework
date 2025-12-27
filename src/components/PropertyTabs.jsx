import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function PropertyTabs({ property }) {
  return (
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Floor Plan</Tab>
        <Tab>Map</Tab>
      </TabList>

      <TabPanel>
        <p>{property.longDescription}</p>
      </TabPanel>

      <TabPanel>
        <img src={property.floorPlan} alt="Floor plan" />
      </TabPanel>

      <TabPanel>
        <iframe
          title="map"
          src={`https://maps.google.com/maps?q=${property.coordinates.lat},${property.coordinates.lng}&output=embed`}
        />
      </TabPanel>
    </Tabs>
  );
}
