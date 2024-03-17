import React, { useState } from "react";
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel, Checkbox, CheckboxGroup, Stack, Text, Button, Textarea, Grid, GridItem, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const Index = () => {
  const [selectedSections, setSelectedSections] = useState([]);
  const [findings, setFindings] = useState("");
  const [impression, setImpression] = useState("");

  const sections = [
    { name: "Numeração", subsections: [] },
    { name: "Pós-operatório", subsections: [] },
    { name: "Alinhamento", subsections: [] },
    { name: "Corpos vertebrais", subsections: [] },
    { name: "Facetas", subsections: [] },
    {
      name: "Discos",
      subsections: ["Normal", "L1-L2", "L2-L3", "L3-L4", "L4-L5", "L5-S1"],
    },
    { name: "Hérnias", subsections: [] },
    { name: "Canal vertebral", subsections: [] },
    { name: "Musculatura", subsections: [] },
    { name: "Boastrap", subsections: [] },
    { name: "Cistos perinradiculares", subsections: [] },
  ];

  const autotext = {
    "L1-L2": "L1-L2: Sem perda significativa da altura discal.",
    "L2-L3": "L2-L3: Sem perda significativa da altura discal.",
    "L3-L4": "L3-L4: Sem perda significativa da altura discal.",
    "L4-L5": "L4-L5: Sem perda significativa da altura discal.",
    "L5-S1": "L5-S1: Prolapso discal sem determinar compressão significativa de estruturas neurais.",
    conclusion: "Disposição degenerativa conforme normatizado acima.",
  };

  const handleSectionToggle = (section) => {
    selectedSections.includes(section) ? setSelectedSections(selectedSections.filter((s) => s !== section)) : setSelectedSections([...selectedSections, section]);
  };

  const handleAutoText = (text) => {
    setFindings(findings + autotext[text] + "\n\n");
  };

  return (
    <Grid templateColumns="20% 1fr 20%" gap={6}>
      <GridItem>
        <Stack spacing={4}>
          {sections.map((section) => (
            <Box key={section.name}>
              <Checkbox isChecked={selectedSections.includes(section.name)} onChange={() => handleSectionToggle(section.name)}>
                {section.name}
              </Checkbox>
              <Stack pl={6} mt={1} spacing={1}>
                {section.subsections.map((subsection) => (
                  <Checkbox key={subsection} isChecked={selectedSections.includes(subsection)} onChange={() => handleSectionToggle(subsection)}>
                    {subsection}
                  </Checkbox>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </GridItem>

      <GridItem>
        <Tabs isFitted variant="enclosed">
          <TabList>
            <Tab>técnica</Tab>
            <Tab>análise</Tab>
            <Tab>conclusão</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>Images obtained via multislice CT acquisition</Text>
            </TabPanel>
            <TabPanel>
              <Textarea value={findings} onChange={(e) => setFindings(e.target.value)} placeholder="Enter findings here" height="400px" />
            </TabPanel>
            <TabPanel>
              <Textarea value={impression} onChange={(e) => setImpression(e.target.value)} placeholder="Enter impression here" height="400px" />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>

      <GridItem>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  descobrir
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack spacing={2}>
                {Object.keys(autotext).map((key) => (
                  <Button key={key} size="sm" onClick={() => handleAutoText(key)}>
                    {key}
                  </Button>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </GridItem>
    </Grid>
  );
};

export default Index;
