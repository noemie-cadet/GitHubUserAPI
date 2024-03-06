import { Card, Tooltip, Typography } from "@mui/material";
import { GithubProfile } from "../types/github_profile";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { Button } from "@mui/base";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export function CardGithubProfileInfos({ githubProfile }: { githubProfile: GithubProfile }) {
  return (
    <Card className="flex max-w-[800px] rounded-xl w-full items-center bg-[#21262d]">
      <div className="flex max-w-80 w-full items-center justify-center">
        <a href={githubProfile.html_url}>
        <img className="rounded-full my-5" src={githubProfile.avatar_url} width={200} alt="avatar" />
        </a>
      </div>
      <div className="flex flex-col w-full justify-start items-start mt-10 mr-8">
        <div className="flex w-full justify-between">
          <div>
            <Typography className="text-white text-2xl text-left font-bold">{githubProfile.login}</Typography>
            <Typography className="text-gray-400 mb-3">{githubProfile.name}</Typography>
          </div>
          <div className="flex items-start">
          <Tooltip title={`${githubProfile.public_repos} repositories`}>
            <a href={githubProfile.repos_url}>
              <Typography className="text-gray-400 text-lg">
                <span className="text-white font-bold">{githubProfile.public_repos}</span>
                <BookOutlinedIcon className="ml-1 text-[15px]" />
              </Typography>
            </a>
            </Tooltip>
          </div>
        </div>
        <Typography className="text-white text-lg mb-3">{githubProfile.bio}</Typography>
        <div className="gap-1 flex items-center">
          <GroupOutlinedIcon className="text-gray-400 p-1" />
          <Typography className="text-white">{githubProfile.followers}</Typography>
          <Typography className="text-gray-400">followers</Typography>
          <Typography className="text-white">{githubProfile.following}</Typography>
          <Typography className="text-gray-400">following</Typography>
        </div>
        <div className="gap-2 flex justify-end items-center my-8 w-full">
          <a href={githubProfile.html_url}>
            <Button className="flex bg-blue-800 text-white rounded-md p-1 px-3">
              <PersonOutlineOutlinedIcon className="p-1" />
              {"Profile"}
            </Button>
          </a>
          <a href={githubProfile.repos_url}>
            <Button className="flex border text-white rounded-md p-1 px-2">
              <BookOutlinedIcon className="p-1" />
              {"Repositorie"}
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}
