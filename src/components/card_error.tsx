import { Card, Typography } from "@mui/material";
import SearchOffOutlinedIcon from '@mui/icons-material/SearchOffOutlined';

export function CardError() {
  return (
    <Card className="flex flex-col max-w-[800px] h-[300px] justify-center rounded-xl w-full items-center bg-[#21262d]">
      <Typography className="text-white font-bold text-xl">
        {"Aucun résultat trouvé"}
      </Typography>
      <SearchOffOutlinedIcon className="text-white text-[90px] mt-5"/>
    </Card>
  );
}
