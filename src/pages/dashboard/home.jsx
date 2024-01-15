import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "@/data";
import './App.css'
import './card.css'



export function Home() {
  
  return (
    <div className="mt-12">

       <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-2 mt-4">
        <Card className="overflow-hidden xl:col-span-1">
          <CardHeader>
            
            
          </CardHeader>
          
        </Card>
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              
            </Typography>
            <Typography variant="small" className="flex items-center gap-1 font-normal text-blue-gray-600" >
              
              
            
              <ArrowUpIcon strokeWidth={3} className="h-3.5 w-3.5 text-green-500"/>
                
              
              
            </Typography>
          </CardHeader>
          <CardBody>
          
          </CardBody>
          
        </Card>
      </div> 
        
      <div class="wrap">
          <a href="https://huggingface.co/spaces/hugoha00/prueba_dashboard" target="_blank" class="button_dashboard">Try the Dashboard!</a>
      </div>

      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-2 mt-6">
        <Card className="overflow-hidden xl:col-span-1">
          <CardHeader
            
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Projects
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckIcon strokeWidth={3} className="h-4 w-4 text-blue-500" />
                <strong>7</strong> patients
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Change Average</MenuItem>
                <MenuItem>Change Breathing Cycle</MenuItem>
                <MenuItem>Change Doses</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          
        </Card>
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Circos.ca?
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong></strong> Data Clustering?
            </Typography>
          </CardHeader>
          <CardBody>
          
          </CardBody>
          
        </Card>
      </div>
    </div>
  );
}

export default Home;
