import { ConnectionDB } from "..";

async function main() {
  console.log("seed");
}
main()
  .then(async () => {
    await ConnectionDB.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await ConnectionDB.$disconnect();
    process.exit(1);
  });
