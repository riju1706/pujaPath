import React from "react";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { Chip } from "@mui/material";

export default function SamagriTreeView({ samagri }) {
  const getItemId = (outerIndex, innerIndex) => `${outerIndex}-${innerIndex}`;

  return (
    <SimpleTreeView>
      <TreeItem nodeId="grid" label="Samagri List">
        {samagri.map((item, outerIndex) =>
          Object.entries(item).map(([key, value], innerIndex) => {
            console.log(key);
            if (
              key !== "price" &&
              key !== "Duration" &&
              key !== "duration" &&
              key !== "Unit" &&
              key !== "shortTimePrice"
            ) {
              console.log(key);
              return (
                // <TreeItem
                //   nodeId={key}
                //   label={`${key} ${value.quantity[0]} ${value.quantity[1]}`}
                // />
                <TreeItem
                  itemId={key}
                  label={`${key} ${value.quantity[0]} ${value.quantity[1]}`}
                />
              );
            } else {
              return null;
            }
          })
        )}
      </TreeItem>
    </SimpleTreeView>
  );
}
