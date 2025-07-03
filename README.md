This PR implements the ADS section of the main page, it includes:

- Creation of AdsSectionOrganism, composed of:
    - AdCardMolecule created to give each card an structure,
    - Each card is rendered dynamically with a .map
- Centralized ads data in ads.ts
- Ads type created for Props
- Responsive structure following Atomic Design principles
- Final layout and interaction match the original HTML/CSS design

Ready to merge into `main-section`
