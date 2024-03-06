import { Card, Typography } from "@mui/material";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

export function CardPlaceholder() {
  return (
    <Card className="flex flex-col max-w-[800px] h-[300px] justify-center rounded-xl w-full items-center bg-[#21262d]">
      <Typography className="text-white font-bold text-xl">
        <span className="text-gray-400">{"Trouvez "}</span>
        {"Partout, "}
        <span className="text-gray-400">{"Trouvez "}</span>
        {"Tous!"}
      </Typography>
      <LanguageOutlinedIcon className="text-white text-[90px] mt-5"/>
    </Card>
  );
}
