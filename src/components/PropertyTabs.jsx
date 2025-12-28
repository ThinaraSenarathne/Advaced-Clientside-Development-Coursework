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
        <p>{property.description}</p>
      </TabPanel>

      <TabPanel>
        <img
            src={`/${property.floorPlan.replace("public/", "")}`}
            alt="Floor plan"
        />
      </TabPanel>

      <TabPanel>
        <iframe
            title="map"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
            property.location || property.postcode
            )}&output=embed`}
        />
      </TabPanel>
    </Tabs>
  );
}
