import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";


import { BarChartOutlined } from '@ant-design/icons';
import React, { useState} from 'react';
import { Collapse, Select } from 'antd';

import './App.css'
import './orbit.css'


const text1 = `
Basic statistical measures that describe the distribution of voxel intensities within the region of interest (ROI) in a medical image. 
These features provide information about the intensity values without considering spatial relationships between voxels. 
First order features are derived directly from the histogram of voxel intensities within the ROI.                     
Some of this features are: Mean, median, standard deviation, minimum, maximum...etc.
`;

const text2 = `
Quantitative measures that describe the geometric properties and shape characteristics of a three-dimensional region of interest (ROI) within a medical image.
These features provide valuable information for characterizing the shape and spatial distribution of structures in medical images.
Some of this features are: Volume, Surface Area, Sphericity...etc.
`;

const text3 = `
Quantitative measures that describe the geometric properties and shape characteristics of a two-dimensional region of interest (ROI) within a medical image. 
Unlike their 3D counterparts, these features focus on analyzing structures in a single image slice rather than considering the entire three-dimensional volume.
Some of this features are: Area, perimeter, circularity, orientation... etc.
`;

const text4 = `
Set of texture features commonly used in image processing and analysis. These features describe the spatial relationships of pixel intensities in a digital image and provide information about the texture and patterns present in the image. 
GLCM is particularly useful for capturing properties like roughness, smoothness, and regularity.
Some of this features are: Definition, calculation, contrast, energy, entropy... etc.
`;

const text5 = `
Set of texture features used in image analysis, specifically designed to capture the distribution of connected regions of pixels with the same intensity level, 
known as "size zones" or "gray-level zones." GLSZM is particularly useful for characterizing the size variations and spatial distribution of homogeneous regions in an image.
Some of this features are: Definition, calculation, small zone emphasis, large zone emphasis... etc.
`;

const text6 = `
texture features used in image analysis to characterize the distribution of consecutive pixels with the same intensity level along specific directions in an image. 
These features capture information about the length and frequency of homogeneous runs of pixels in different directions.
Some of this features are: Definition, calculation, short run emphasis, long run emphasis... etc.
`;

const text7 = `
texture features used in image analysis to describe the differences in pixel intensities between a pixel and its neighbors. 
These features provide information about the local variations in intensity within an image, capturing details related to the fine texture patterns.
Some of this features are: Definition, calculation, coarseness, contrast... etc.
`;

const text8 = `
texture features used in image analysis to characterize the dependence between pixel pairs based on their gray levels. 
These features capture information about the spatial relationships and patterns of gray levels within an image.
Some of this features are: Definition, calculation, dependence entropy, dependence Non-Uniformity etc.
`;



export function Profile2() {

  const dicomFilePath = '/img/2.16.840.1.114362.1.12156802.26310034654.652494553.151.1.dcm';
  




  const [expandIconPosition, setExpandIconPosition] = useState('start');
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <BarChartOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const items = [
    {
      key: '1',
      label: 'First Order Statistics',
      children: <div style={{ textAlign: 'justify' }}>{text1}</div>,
      extra: genExtra(),
    },
    {
      key: '2',
      label: 'Shape-based (3D)',
      children: <div style={{ textAlign: 'justify' }}>{text2}</div>,
      extra: genExtra(),
    },
    {
      key: '3',
      label: 'Shape-based (2D)',
      children: <div style={{ textAlign: 'justify' }}>{text3}</div>,
      extra: genExtra(),
    },
    {
      key: '4',
      label: 'Gray Level Co-ocurrence Matrix',
      children: <div style={{ textAlign: 'justify' }}>{text4}</div>,
      extra: genExtra(),
    },
    {
      key: '5',
      label: 'Gray Level Run Length Matrix',
      children: <div style={{ textAlign: 'justify' }}>{text5}</div>,
      extra: genExtra(),
    },
    {
      key: '6',
      label: 'Gray Level Size Zone Matrix',
      children: <div style={{ textAlign: 'justify' }}>{text6}</div>,
      extra: genExtra(),
    },
    {
      key: '7',
      label: 'Neighbouring Gray Tone Difference Matrix',
      children: <div style={{ textAlign: 'justify' }}>{text7}</div>,
      extra: genExtra(),
    },
    {
      key: '8',
      label: 'Gray Level Dependence Matrix',
      children: <div style={{ textAlign: 'justify' }}>{text8}</div>,
      extra: genExtra(),
    },
  ];

  

  return (
    <>
      <div className="relative mt-1" style={{ height: '250px', width: '1170px' }}>
        
            <div class="container">
          <p class="letter letter-R">R</p>
          <p class="letter letter-A">A</p>
          <p class="letter letter-D">D</p>
          <p class="letter letter-I">I</p>
          <div class="moon">
              <div class="orbit">
                  <p>O</p>
              </div>
          </div>
          <p class="letter letter-M">M</p>
          <p class="letter letter-I2">I</p>
          <p class="letter letter-C">C</p>
          <p class="letter letter-S">S</p>
        </div>

      </div>
      

    <div className="mb-6 flex">

    
      <div className="my-0 mb-6 mr-0 w-1/2">

          <Card className="w-full max-w-[48rem] flex-row">
          <CardHeader
            shadow={true}
            floated={true}
            className="m-0 w-2/5 shrink-0 rounded-r-none bg-gray-400"
          >
            <img
              src="/img/pyradiomics.jpg"
              alt="card-image"
              className="h-full w-full object-fit" style={{ transform: 'scaleX(1.8) scaleY(0.7) translateX(-2px)' }}
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              Pyradiomics
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Your Gateway to Radiomic Insights
            </Typography>
            <Typography color="gray" className="mb-8 font-normal text-justify">
              Open-source python package for the extraction of Radiomics features from medical imaging. 
              With this package we aim to establish a reference standard for Radiomic Analysis, and provide a tested and maintained open-source 
              platform for easy and reproducible Radiomic Feature extraction. By doing so, we hope to increase awareness of radiomic
              capabilities and expand the community.
            </Typography>
            <a href="https://pyradiomics.readthedocs.io/en/latest/index.html" className="inline-block" target="_blank">
              <Button variant="text" className="flex items-center gap-2" style={{ color: 'rgba(255, 0, 127, 1)' }} >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
            </CardBody>
              </Card>
              </div>
          
              <Card className="mx-8 lg:mx-2 w-1/2">

              <div className="px-2 pb-8 pl-8 pr-8">
                <Typography variant="h6" color="blue-gray" className="mb-2 ml-4 mt-3">
                  What are radiomics features?
                </Typography>

                
                      <Card key="title" color="transparent" shadow={false}>
                      <div className="flex flex-col items-center justify-center">
                      <div className="text-container" style={{ textAlign: 'justify' }}>
                    <p> 
                    Radiomic features are quantitative parameters extracted from medical images through image processing techniques. These features encompass a variety of descriptors, such as statistical measures, texture patterns, shape characteristics, and spatial relationships within the images. The goal is to derive meaningful information from medical images, aiding in tasks like diagnosis, prognosis, and treatment planning. Radiomic features are often used in conjunction with machine learning to build models that can classify diseases, predict outcomes, and provide insights into tissue characteristics
                    </p>
                    <br /> {/* Línea en blanco */}
                    <p>
                    Challenges in radiomics include ensuring the reliability of features, dealing with variations in imaging protocols, and addressing the interpretability and clinical relevance of certain descriptors. Overall, radiomics represents an approach to leverage the wealth of information embedded in medical images for more informed and data-driven medical decision-making.
                    </p>
                  </div>
                        </div>
                      </Card>
                    
                    
              </div>
            </Card>
  
      </div>
    


      <div className="mb-6 flex">
      <div className=" w-1/2 ml-1">

        <Card className="mx-0 mt-20 mr-0 mb-6 lg:mx-4">
        <CardBody className="p-4">
        <>
      <Collapse
        defaultActiveKey={['1']}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
        items={items}
      />
      <br />
      <a href="https://pyradiomics.readthedocs.io/en/latest/features.html" className="inline-block" target="_blank">
          <Button variant="text" className="flex items-center gap-2" style={{ color: 'rgba(255, 0, 127, 1)' }} >
            Check specific features
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
     
      
        </>

        </CardBody>
      </Card>
      </div>

      <Card className="mx-0 mt-20 mr-0 mb-6 lg:mx-4 w-1/2">
        <CardBody className="p-4">
        

        </CardBody>
      </Card>

      
        </div>
        
     
    </>
  );
}

export default Profile2;



