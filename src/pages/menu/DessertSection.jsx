import OutlineButton from "../../components/buttons/OutlineButton";
import Cover from "../../shared/cover/Cover";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import MenuItems from "../../shared/menuItems/MenuItems";

const DessertSection = ({ items }) => {
  return (
    <section>
      <Cover
        img={dessertImg}
        height={"700px"}
        heading={"DESSERTS"}
        description={"Would you like to try a dish?"}
      ></Cover>

      <div className="mt-10">
        <MenuItems items={items}></MenuItems>
      </div>

      <div className="flex justify-center">
        <OutlineButton btnTitle={"ORDER YOUR favourite FOOD"}></OutlineButton>
      </div>
    </section>
  );
};

export default DessertSection;
