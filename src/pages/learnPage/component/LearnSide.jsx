import * as React from "react";
import Box from "@mui/material/Box";

import { RichTreeView } from "@mui/x-tree-view/RichTreeView";

const MUI_X_PRODUCTS = [
  {
    id: "grid",
    label: "Section1",
    children: [
      { id: "grid-community", label: "@mui/x-data-grid" },
      { id: "grid-pro", label: "@mui/x-data-grid-pro" },
      { id: "grid-premium", label: "@mui/x-data-grid-premium" },
    ],
  },
  {
    id: "pickers",
    label: "Section2",
    children: [
      { id: "pickers-community", label: "@mui/x-date-pickers" },
      { id: "pickers-pro", label: "@mui/x-date-pickers-pro" },
    ],
  },
  {
    id: "charts",
    label: "Section3",
    children: [{ id: "charts-community", label: "@mui/x-charts" }],
  },
  {
    id: "tree-view",
    label: "Section4",
    children: [{ id: "tree-view-community", label: "@mui/x-tree-view" }],
  },
  {
    id: "grid15",
    label: "Section5",
    children: [
      { id: "grid-community1", label: "@mui/x-data-grid" },
      { id: "grid-pr1o", label: "@mui/x-data-grid-pro" },
      { id: "grid-pr1emium", label: "@mui/x-data-grid-premium" },
    ],
  },
  {
    id: "grid12",
    label: "Section6",
    children: [
      { id: "grid-comm2unity", label: "@mui/x-data-grid" },
      { id: "grid-2pro", label: "@mui/x-data-grid-pro" },
      { id: "grid-p2remium", label: "@mui/x-data-grid-premium" },
    ],
  },
  {
    id: "grid10",
    label: "Section7",
    children: [
      { id: "grid-comm3unity", label: "@mui/x-data-grid" },
      { id: "grid-pro3", label: "@mui/x-data-grid-pro" },
      { id: "grid-p3remium", label: "@mui/x-data-grid-premium" },
    ],
  },
];

export default function LearnSide() {
  return (
    <Box sx={{ minHeight: 352, minWidth: 250, padding: "1rem" }}>
      <RichTreeView items={MUI_X_PRODUCTS} />
    </Box>
  );
}
