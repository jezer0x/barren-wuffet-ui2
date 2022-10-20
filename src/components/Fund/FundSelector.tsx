import Selector from "../Form/Selector";

const FundSelector = (props: {
  infos: any;
  selected: any;
  setSelected: any;
}) => {
  const { infos, selected, setSelected } = props;

  return (
    <Selector
      items={infos.map((info: any) => ({ ...info, icon: info.logo }))}
      selectedItem={{ ...selected, icon: selected.logo }}
      setSelectedItem={setSelected}
    />
  );
};

export default FundSelector;
