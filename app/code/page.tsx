import Link from "next/link";
import React from "react";

interface CodeFeature {
  title: string;
  description: string;
  snippet: string;
}

const CODE_FEATURES: CodeFeature[] = [
  {
    title: "Voxel-Based Spawning",
    description:
      "To ensure bunnies only spawn on valid terrain, we utilize Roblox's Terrain:ReadVoxels API. This scans the game world grid and ensures entities only appear on Grass or Salt materials, preventing spawns inside walls or underwater.",
    snippet: `local region = Region3.new(min, max):ExpandToGrid(4)
local materials = workspace.Terrain:ReadVoxels(region, 4)

-- Only spawn if the voxel is valid ground
if (material == Enum.Material.Grass or material == Enum.Material.Salt) then
    spawnBunny(location)
end`,
  },
  {
    title: "Vacuum Physics & Networking",
    description:
      "The vacuum mechanic splits the workload to prevent lag. The Client handles the visual beam rendering, while the Server handles the physics application (AssemblyLinearVelocity) and validates the hit detection.",
    snippet: `// Server-side Physics Application
local diff = -model.PrimaryPart.Position + muzzle.Position
local newDir = (diff).Unit

// Apply velocity towards the muzzle
pp.AssemblyLinearVelocity = newDir * 15`,
  },
  {
    title: "Inventory State Management",
    description:
      "Player inventories are managed via a modular script system. When a player catches a bunny, the server validates the distance, updates the session data table, and syncs the UI via RemoteEvents.",
    snippet: `// Adding to bag safely on Server
local function addToBag(model)
    local bag = require(bagModuleScript)
    bag:addItem(model)
    
    // Sync client UI
    remote:FireClient(player, "Pop")
end`,
  },
];

export default function CodePage() {
  return (
    <section className="page-section">
      <div className="page-kicker">Under the hood</div>
      <h1 className="page-title">Technical Systems</h1>
      <p className="page-lead">
        Vacuum Bunnies runs on a custom framework handling client-server replication, 
        voxel terrain analysis, and modular data storage.
      </p>

      <div className="code-grid">
        {CODE_FEATURES.map((feature) => (
          <article key={feature.title} className="card code-card">
            <h2 className="card-title">{feature.title}</h2>
            <p className="card-body">{feature.description}</p>
            
            <div className="code-block-wrapper">
              <pre className="code-block">
                <code>{feature.snippet}</code>
              </pre>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}