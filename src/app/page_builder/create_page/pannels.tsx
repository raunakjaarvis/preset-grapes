'use client'

import { MouseEventHandler, useState, useEffect } from "react";
import _ from 'lodash'

// redux
import { useDispatch, useSelector } from '@/store/store';
import { setJobDisplayAs } from '@/store/projects/page_builder'
import { CommonObject } from '@/types/page_builder'

// antd
import { Avatar, Button, Col, Collapse, ColorPicker, Row, Segmented, Select, Slider, Switch, Upload } from "antd"
import type { CollapseProps, UploadFile, SelectProps } from 'antd';
import { Color } from "antd/es/color-picker";


import { styled } from "styled-components";

// icons
import AlignLeftIcon from '@/icons/page_builder/align-left-icon.svg'
import AlignCenterIcon from '@/icons/page_builder/align-center-icon.svg'
import AlignRightIcon from '@/icons/page_builder/align-right-icon.svg'

import AlignLeftArrow from '@/icons/page_builder/align-left-arrow.svg'
import AlignCenterArrow from '@/icons/page_builder/align-horizontal-center.svg'
import AlignRightArrow from '@/icons/page_builder/align-right-arrow.svg'

import XIcon from '@/icons/page_builder/x-icon.svg'

import ColorsIcon from '@/icons/page_builder/colors-icon.svg'
import EyeIcon from '@/icons/page_builder/eye-icon.svg'
import LockIcon from '@/icons/page_builder/lock-icon-2.svg'

import AlignLeftArrow2 from '@/icons/page_builder/align-left-arrow-2.svg'
import AlignRightArrow2 from '@/icons/page_builder/align-right-arrow-2.svg'

import AlignTopArrowIcon from '@/icons/page_builder/align-top-arrow.svg'
import AlignVerticalCenter from '@/icons/page_builder/align-vertical-center.svg'
import AlignBottomArrowIcon from '@/icons/page_builder/align-bottom-arrow.svg'

import SquaresIcon from '@/icons/page_builder/squares-icon.svg'
import MasonryIcon from '@/icons/page_builder/masonry-icon.svg'
import BasicIcon from '@/icons/page_builder/basic-icon.svg'

import RefreshIcon from '@/icons/page_builder/refresh-icon.svg'

import RowsIcon from '@/icons/page_builder/rows-icon.svg'
import RowsLeftIcon from '@/icons/page_builder/rows-left-icon.svg'
import RowsRightIcon from '@/icons/page_builder/rows-right-icon.svg'

import AlignTopArrow20Icon from '@/icons/page_builder/align-top-arrow-20.svg'

import SpacingHeightIcon from '@/icons/page_builder/spacing-height-icon.svg'

import TypeSquareIcon from '@/icons/page_builder/type-square-icon.svg'

import ParagraphSpacingIcon from '@/icons/page_builder/paragraph-spacing.svg'

import EyeOffIcon from '@/icons/page_builder/eye-off.svg'
import FlexAlignTopIcon from '@/icons/page_builder/flex-align-top.svg'
import FlexAlignBottomIcon from '@/icons/page_builder/flex-align-bottom.svg'
import PlusTransIcon from '@/icons/page_builder/plus-icon-trans.svg'

import ImageIndentLeftIcon from '@/icons/page_builder/image-indent-left.svg'
import ImageIndentRightIcon from '@/icons/page_builder/image-indent-right.svg'

import ShapeRectIcon from '@/icons/page_builder/shape-rect.svg'
import ShapeCircleIcon from '@/icons/page_builder/shape-circle.svg'


import {
  CONTENT_ALIGN, 
  TEXT_CONTAINER_WIDTH, 
  ALIGN, 
  INNER_PADDING, 

  SECTION_HEADER_ALIGN, 
  SECTION_HEADER_CONTENT_ALIGN, 
  SECTION_HEADER_WIDTH, 
  SECTION_HEADER_SPACING, 
  SECTION_HEADER_CONTENT_BOUNDARY, 

  SECTION_TOP_PADDING, 
  SECTION_BOTTOM_PADDING, 

  HEIGHT, 
  VERTICAL_ALIGN, 

  GALLERY_TYPE, 
  GALLERY_GRID_TYPE, 
  GALLERY_ALIGN, 
  GALLERY_LAST_ITEM_ALIGN, 
  GALLERY_COLUMNS, 
  GALLERY_GAPS, 

  LIST_COLUMNS, 
  LIST_GAPS, 
  LIST_ITEM_ROW_ALIGNMENT, 
  LIST_LAST_ITEM_ALIGN, 
  LIST_ITEM_LAYOUT, 

  MAP_WIDTH, 
  MAP_ALIGN, 
  MAP_HEIGHT, 

  JOB_DISPLAY_AS, 
  JOB_TABLE_SPACING, 
  JOB_CARD_TITLE_SIZE, 
  JOB_CARD_INNER_PADDING, 
  JOB_FILTER_POSITION, 
  JOB_TAB_POSITION, 
  JOB_TAB_TEXT_SIZE, 

  QUOTE_TEXT_SIZE, 
  QUOTE_PADDING, 
  QUOTE_AUTHOR_STYLE, 
  QUOTE_AUTHOR_IMAGE_SIZE, 
  QUOTE_AUTHOR_IMAGE_SHAPE, 
  QUOTE_AUTHOR_TEXT_SIZE, 
  QUOTE_COTAINER_PADDING, 

  QUOTE_LIST_COLUMNS, 
  QUOTE_LIST_GAPS,
  CT_HEADER_COMPONENT,
} from './constants'

import {
  JOB_TALBE_COLUMNS,

  ID_CLASS_PREFIX, 

  CT_MAIN_COMPONENT, 
  CT_CONTENT_COMPONENT, 

  CT_JOB_TAB_COTNAINER, 
  CT_JOB_FILTER_CONTAINER, 
  CT_JOB_GROUP_CONTAINER, 
  CT_JOB, 
  CT_JOB_CARD, 
  CT_JOB_CARD_HEADER, 
  CT_JOB_FILTER, 
  CT_JOB_FILTER_ITEM, 

  CT_QUOTE_ITEM, 
  CT_LIST_SETTING, 

  CT_HEADER,
  CT_CONTENT, 
  CT_IMAGE, 
  CT_GALLERY, 
  CT_GALLERY_ITEM, 
  CT_GALLERY_IMG, 
  CT_GALLERY_CAROUSEL, 
  CT_GALLERY_CAROUSEL_CTL, 
  CT_IFRAME, 
  CT_VIDEO, 

  CT_QUOTE_TEXT, 
  CT_QUOTE_AUTHOR_IMG, 
  CT_QUOTE_AUTHOR_TXT, 
} from './constants'

import { Component } from "grapesjs"
import { Editor } from 'grapesjs'

import EditTableColumnModal from './modals/edit-table-column-modal'
import EditFilterColumnModal from './modals/edit-filter-column-modal'
import { table } from "console";

const jobs: any[] = [
  {
    'job_title': "Job Title 1", 
    'category': 'category 1', 
    'department': 'department 1', 
    'county': 'county 1', 
    'remote_status': 'Remote status 1', 
    'job_status': 'Job status 1', 
    'created_at': '2023-10-27', 
  }, 
  {
    'job_title': "Job Title 2", 
    'category': 'category 2', 
    'department': 'department 2', 
    'county': 'county 2', 
    'remote_status': 'Remote status 2', 
    'job_status': 'Job status 2', 
    'created_at': '2023-10-27', 
  }, 
  {
    'job_title': "Job Title 3", 
    'category': 'category 2', 
    'department': 'department 3', 
    'county': 'county 3', 
    'remote_status': 'Remote status 3', 
    'job_status': 'Job status 3', 
    'created_at': '2023-10-27', 
  }, 
  {
    'job_title': "Job Title 4", 
    'category': 'category 2', 
    'department': 'department 4', 
    'county': 'county 4', 
    'remote_status': 'Remote status 4', 
    'job_status': 'Job status 4', 
    'created_at': '2023-10-27', 
  }, 
  {
    'job_title': "Job Title 5", 
    'category': 'category 5', 
    'department': 'department 5', 
    'county': 'county 5', 
    'remote_status': 'Remote status 5', 
    'job_status': 'Job status 5', 
    'created_at': '2023-10-27', 
  }
]




function setComponentSetting ( 
  editor: Editor | null = null,
  style: Record<string, any> = {},
  components: Component[] | null = null
) {
  if(!editor) return;

  // get id-class-name
  const editorComponent = editor.getWrapper()
  const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
  const classes = mainComponent?.getClasses()
  const idClass = classes?.find((item: string) => item.includes(ID_CLASS_PREFIX))
  if(!idClass) return

  // get rule manager
  const css = editor.Css

// set new rules and update rules
  Object.keys(style).map((key) => {
    const ruleSelector = `.${idClass}${key}`
    const rule = css.getRule(ruleSelector)
    if(!rule) {
      css.setRule(ruleSelector, {...style[key]})
    } else {
      const ruleStyle = rule.get('style')
      const newRule = {...ruleStyle, ...style[key]}
      css.remove(ruleSelector)
      css.setRule(ruleSelector, newRule)
    }
  })

}

/**
 * return callback handleFunction
 * isSplit === true ? will get string value, isSplit === false ? will choose array value from filterArr
 */
function setInitPanelSetting(
  editor: Editor,
  attrKey: string, 
  filterArr: string[], 
  handleFunction: (value: string) => void, 
  isSplit: boolean = false, 
  filterStr: string = ''
) {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
    const attrs = mainComponent?.getAttributes()[attrKey]
    const lstAttr = attrs?.split(" ")

    if(isSplit === false) {
      let index = lstAttr?.findIndex((item: string) => filterArr.indexOf(item) > -1)
      if (lstAttr && index > -1)handleFunction(lstAttr[index])
    } else {
      const filteredArray = lstAttr?.filter((item: string) => item.includes(filterStr))
      if(filteredArray) handleFunction(filteredArray[0]?.split("-")[1])
    }
}

function setGallerySetting(editor: Editor | null = null, type: string, gridType: string, columns: string, lastItemAlignment: string, gaps: string) {
  if(!editor) return

  // get id-class-name
  const editorComponent = editor.getWrapper()
  const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
  const classes = mainComponent?.getClasses()
  const idClass = classes?.find((item: string) => item.includes(ID_CLASS_PREFIX))
  const galleryItemCount = mainComponent?.find(`.${CT_GALLERY_ITEM}`).length
  if(!idClass) return
  
  const css = editor.Css
  const allRules = css.getAll()

  const toRemove = allRules.filter((rule: any) => {
    return rule.selectorsToString().includes(`.${idClass}`) || rule.selectorsToString().includes(`.${CT_GALLERY_ITEM}`)
  })
  toRemove.forEach((rule: any) => css.remove(rule))

  const gap_value = (gaps === "GNone" && "0rem")
                || (gaps === "GS" && "0.5rem") 
                || (gaps === "GM" && "1rem") 
                || (gaps === "GL" && "2rem") 
                || (gaps === "GXL" && "3rem")

  const column_count =  ((columns === "C_1" && 1) 
                || (columns === "C_2" && 2) 
                || (columns === "C_3" && 3) 
                || (columns === "C_4" && 4)) as number

  const column_flex_value = (columns === "C_1" && "100%") 
                || (columns === "C_2" && "50%") 
                || (columns === "C_3" && "33.3333%") 
                || (columns === "C_4" && "25%")
  const lastitem_align = ( lastItemAlignment === "LIALeft" && "start")
                || ( lastItemAlignment === "LIACenter" && "center")
                || ( lastItemAlignment === "LIARight" && "end")

  setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`]: {'gap' : gap_value}})

  if(type === "TGrid") {
    if(gridType === "GTSquares") {
      setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`]: {'display' : "grid", "grid-template-columns": `repeat(${column_count}, minmax(0, 1fr))`, 'grid-auto-rows': '200px'}})
      setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`]: {'width': '100%', 'height': '100%'}})
      setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}:nth-child(3n + 2)`]: {
            'grid-column' : `span 2 / span 2`, 
            'grid-row' : `span 2 / span 2`, 
            'overflow': 'hidden'
          }})

    } else {
      setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`]: {'display' : "flex", 'flex-wrap': 'wrap', 'justify-content': lastitem_align}})
      setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`]: {'flex-basis' : `calc(${column_flex_value} - ${gap_value})`, 'min-widht': `calc(${column_flex_value} - ${gap_value})`, 'height': column_count <= 2 ? '300px' : '200px', 'overflow': 'hidden'}})

      if(gridType === "GTMasonry"){
        setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`]: {'align-items': 'end'}})
        setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}:nth-child(2)`]: {'height': column_count <= 2 ? '500px' : '300px'}})
      } else if (gridType === "GTBasic") {
        setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`]: { 'display': 'flex', 'align-items': 'center' }})
        setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM} .${CT_GALLERY_IMG}`]: {'width': '100%', 'height': 'auto'}})
      }

    }
  } else if( type === "TCarousel" ) {
    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY_CAROUSEL}`]: {'min-width': (galleryItemCount < 4 ?  "300px": '500px'),'width': (galleryItemCount < 4 ?  "300px": '500px'), 'position': 'relative'}})
    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY_CAROUSEL} .${CT_GALLERY_CAROUSEL_CTL}`]: {'display': 'flex'}})

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`]: {'display': 'flex', 'flex-wrap': 'nowrap !important', 'overflow': 'hidden', 'max-width': '500px', 'justify-content': 'start'}})
    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`]: {'min-width': '300px', 'height': '300px'}})
  }
}



/* 
 * SP = SettingPannel
 * const { editor } = useSelector((store: any) => store.pageBuilder)
 * const selectedComponent = editor.getSelected()
 */

function SPText() {

  const { editor } = useSelector((store: any) => store.pageBuilder)


  const [ contentAlign, setContentAlign ] = useState<string | number>('CALeft')
  const handleContentAlign = (contentAlign: string | number) => {
    setContentAlign(contentAlign)

    setComponentSetting(editor, CONTENT_ALIGN[contentAlign])
  }

  const [ textContainerWidth, setTextContainerWidth ] = useState<string | number>('TCWFull')
  const handleTextContainerWidth = (textContainerWidth: string | number) => {
    setTextContainerWidth(textContainerWidth)

    setComponentSetting(editor, TEXT_CONTAINER_WIDTH[textContainerWidth])
  }

  const [ align, setAlign ] = useState<string | number>('ALeft')
  const handleAlign = (align: string | number) => {
    setAlign(align)

    setComponentSetting(editor, ALIGN[align])
  }

  const handleRemoveBackgroundColor = ( ) => {
    setTextBackgroundColor("#fff")

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {'background-color' : "#FFF"}})
  }

  const [ textBackgroundColor, setTextBackgroundColor ] = useState<string>('#fff')
  const handleTextBackgroundChange = (value: Color, hex: string) => {
    setTextBackgroundColor(hex)

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {'background-color': hex}})
  }

  const [ innerPadding, setInnerPadding ] = useState<string | number>('IPS')
  const handleInnerPadding = (innerPadding: string | number) => {
    setInnerPadding(innerPadding)

    setComponentSetting(editor, INNER_PADDING[innerPadding])
  }

  const ContentAlignOptions = [
    {
      label: <AlignLeftIcon className="m-auto" />, 
      value: 'CALeft',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignCenterIcon className="m-auto" />, 
      value: 'CACenter',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignRightIcon className="m-auto" />, 
      value: 'CARight', 
      className: 'w-1/3 py-1.5', 
    }
  ]

  const TextContainerWidthOptions = [
    {
      label: <ItemTextDiv>Full</ItemTextDiv>, 
      value: 'TCWFull',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>2/3</ItemTextDiv>, 
      value: 'TCW2_3',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>1/2</ItemTextDiv>, 
      value: 'TCW1_2', 
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>1/3</ItemTextDiv>, 
      value: 'TCW1_3', 
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>1/4</ItemTextDiv>, 
      value: 'TCW1_4', 
      className: 'w-1/5 py-1.5', 
    }
  ]

  const AlignOptions = [
    {
      label: <AlignLeftArrow className="m-auto" />, 
      value: 'ALeft',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignCenterArrow className="m-auto" />, 
      value: 'ACenter',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignRightArrow className="m-auto" />, 
      value: 'ARight', 
      className: 'w-1/3 py-1.5', 
    }
  ]

  const InnerPaddingOptions = [
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'IPS',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'IPM',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'IPL', 
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>XL</ItemTextDiv>, 
      value: 'IPXL', 
      className: 'w-1/4 py-1.5', 
    }, 
  ]

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>Text</PanelHeaderDiv>,
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

        <div>
          <ItemHeaderDiv className={`mb-2`}>Content Alignment</ItemHeaderDiv>
          <Segmented options={ContentAlignOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleContentAlign} value={ contentAlign } ></Segmented>
        </div>
        <div>
          <ItemHeaderDiv className={`mb-2`} >Text Container Width</ItemHeaderDiv>
          <Segmented options={TextContainerWidthOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleTextContainerWidth} value={textContainerWidth} ></Segmented>
        </div>
        <div>
          <ItemHeaderDiv className={`mb-2`}>Align</ItemHeaderDiv>
          <Segmented options={AlignOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} value={align} onChange={handleAlign} ></Segmented>
        </div>
        <div className="flex">
          <ItemHeaderDiv className="inline-block my-auto !mr-auto">Text Background Color</ItemHeaderDiv> 
          <Button
              type='text'
              icon={<XIcon />}
              className={`text-center flex pl-1 mx-auto items-center justify-center`}
              onClick={() => handleRemoveBackgroundColor()}
          />
          <ColorPicker 
              onChange={handleTextBackgroundChange} 
              value={textBackgroundColor} />
        </div>
        <div>
          <ItemHeaderDiv className={`mb-2`}>Inner Padding</ItemHeaderDiv>
          <Segmented options={InnerPaddingOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleInnerPadding} value={innerPadding} ></Segmented>
        </div>

      </div>,
    }
  ]

    return (
      <Collapse 
        items={items} 
        defaultActiveKey={[]}
        expandIconPosition="end"
        className="bld-setting-panel"
      />
    )
}

function SPSectionHeader() {

  const { editor } = useSelector((store: any) => store.pageBuilder)
  const [ attrKey, setAttrKey ] = useState<string>('sectionheader')

  useEffect(() => {
    setTimeout(() => {
      setInitPanelSetting( editor, attrKey, [], handleSectionHeaderShowS2B, true, 'shs-')
      setInitPanelSetting( editor, attrKey, Object.keys(SECTION_HEADER_ALIGN), handleAlign )
      setInitPanelSetting( editor, attrKey, Object.keys(SECTION_HEADER_CONTENT_ALIGN), handleContentAlign )
      setInitPanelSetting( editor, attrKey, Object.keys(SECTION_HEADER_WIDTH), handleHeaderWidth )
      setInitPanelSetting( editor, attrKey, Object.keys(SECTION_HEADER_SPACING), handleSpacing )
      setInitPanelSetting( editor, attrKey, Object.keys(SECTION_HEADER_CONTENT_BOUNDARY), handleContentBoundary )
    }, 1000)
  }, [])


  const [ sectionHeaderShow, setSectionHeaderShow ] = useState<boolean>(false)
  const handleSectionHeaderShowS2B = (value: string) => {handleSectionHeaderShow(value === "true")}
  const handleSectionHeaderShow = ( checked: boolean ) => {
    setSectionHeaderShow(checked)

    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
    const sectionHeaderComponent = mainComponent?.find(`.${CT_HEADER_COMPONENT}`)

    if(!checked && sectionHeaderComponent.length){
      sectionHeaderComponent[0].remove()
    }else if(checked && !sectionHeaderComponent.length) {
        const cmp = editor.Components
        const newComponent = cmp.addComponent({
            tagName: "div", 
            attributes: { class: `${CT_HEADER_COMPONENT}` }, 
            components: [
              {
                  type: 'text', // This will be your editable text component.
                  tagName: 'h2',
                  content: 'Section Header',
                  editable: true, // 'editable' here is just a custom property, not used by GrapesJS by default
              }, 
              {
                type: 'text', // This will be your editable text component.
                tagName: 'p',
                content: 'Section Header Content',
                editable: true, // 'editable' here is just a custom property, not used by GrapesJS by default
            }
          ]
        })

        mainComponent.append(newComponent)

        setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT}`]: {'display': 'flex', 'flex-direction': 'column'}})
        setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {'order': '0', 'padding': '25px 50px'}})
        setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {'order': '1'}})
    }
  }

  const [ align, setAlign ] = useState<string | number>('HAAlign')
  const handleAlign = (align: string | number) => {
    setAlign(align)

    setComponentSetting(editor, SECTION_HEADER_ALIGN[align])
  }

  const [ contentAlign, setContentAlign ] = useState<string | number>('CALeft')
  const handleContentAlign = (contentAlign: string | number) => {
    setContentAlign(contentAlign)

    setComponentSetting(editor, SECTION_HEADER_CONTENT_ALIGN[contentAlign])
  }

  const [ headerWidth, setHeaderWidth ] = useState<string | number>('HWFull')
  const handleHeaderWidth = (headerWidth: string | number) => {
    setHeaderWidth(headerWidth)

    setComponentSetting(editor, SECTION_HEADER_WIDTH[headerWidth])
  }

  const [ spacing, setSpacing ] = useState<string | number>('SNone')
  const handleSpacing = (spacing: string | number) => {
    setSpacing(spacing)

    setComponentSetting(editor, SECTION_HEADER_SPACING[spacing])
  }

  const [ contentBoundary, setContentBoundary ] = useState<string | number>('CBFullScreen')
  const handleContentBoundary = (contentBoundary: string | number) => {
    setContentBoundary(contentBoundary)
    
    setComponentSetting(editor, SECTION_HEADER_CONTENT_BOUNDARY[contentBoundary])
  }


  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]

    const allAttributes = mainComponent?.getAttributes()

    mainComponent?.setAttributes({...allAttributes, [attrKey]: [`shs-${sectionHeaderShow}`, align, contentAlign, headerWidth, spacing, contentBoundary ].join(' ')})

  }, [ sectionHeaderShow, align, contentAlign, headerWidth, spacing, contentBoundary ])

  const HeaderAlignOptions = [
    {
      label: <RowsIcon className="m-auto" />, 
      value: 'HAAlign',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <RowsLeftIcon className="m-auto" />, 
      value: 'HALeft',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <RowsRightIcon className="m-auto" />, 
      value: 'HARight', 
      className: 'w-1/3 py-1.5', 
    }
  ]

  const ContentAlignOptions = [
    {
      label: <AlignLeftIcon className="m-auto" />, 
      value: 'CALeft',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignCenterIcon className="m-auto" />, 
      value: 'CACenter',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignRightIcon className="m-auto" />, 
      value: 'CARight', 
      className: 'w-1/3 py-1.5', 
    }
  ]

  const HeaderWidthOptions = [
    {
      label: <ItemTextDiv>Full</ItemTextDiv>, 
      value: 'HWFull',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>2/3</ItemTextDiv>, 
      value: 'HW2_3',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>1/2</ItemTextDiv>, 
      value: 'HW1_2', 
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>1/3</ItemTextDiv>, 
      value: 'HW1_3', 
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>1/4</ItemTextDiv>, 
      value: 'HW1_4', 
      className: 'w-1/5 py-1.5', 
    }
  ]

  const SpacingOptions = [
    {
      label: <ItemTextDiv>-</ItemTextDiv>, 
      value: 'SNone',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'SS',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'SM',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'SL',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>XL</ItemTextDiv>, 
      value: 'SML',
      className: 'w-1/5 py-1.5', 
    }, 
  ]

  const ContentBoundaryOptions = [
    {
      label: <ItemTextDiv>Full Screen</ItemTextDiv>, 
      value: 'CBFullScreen',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>Inset</ItemTextDiv>, 
      value: 'CBInset',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <>
        <Switch size="small" className={`mb-1 bld-ant-switch`} checked={sectionHeaderShow} onChange={(checked: boolean, event: Event) => handleSectionHeaderShow(checked)} />
        <PanelHeaderDiv className="inline-block ml-4">Section Header</PanelHeaderDiv>
      </>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Align</ItemHeaderDiv>
                    <Segmented options={HeaderAlignOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleAlign} value={ align } ></Segmented>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Content Alignment</ItemHeaderDiv>
                    <Segmented options={ContentAlignOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleContentAlign} value={ contentAlign } ></Segmented>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Header Width</ItemHeaderDiv>
                    <Segmented options={HeaderWidthOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleHeaderWidth} value={ headerWidth } ></Segmented>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Spacing</ItemHeaderDiv>
                    <Segmented options={SpacingOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleSpacing} value={ spacing } ></Segmented>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Content Boundary</ItemHeaderDiv>
                    <Segmented options={ContentBoundaryOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleContentBoundary} value={ contentBoundary } ></Segmented>
                  </div>

                </div>
    }
  ]

  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel"
      accordion={false}
    />
  )
}

function SPSelectionColor() {

  const { editor } = useSelector((store: any) => store.pageBuilder)

  const [ headingColor, setHeadingColor ] = useState<string>('#000000')
  const handleHeadingColor = (value: Color, hex: string) => {
    setHeadingColor(hex)

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_HEADER}`]: {'color': hex}})
  }

  const [paragraphColor, setParagraphColor] = useState('#EDEFF1');
    const handleParagraphColorChange = (value: Color, hex: string) => {
        setParagraphColor(hex)

        setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_CONTENT}`]: {'color': hex}})
  }

  const [accentColor, setAccentColor] = useState('#94A3A9');
  const handleAccentColorChange = (value: Color, hex: string) => {
      setAccentColor(hex)

      setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} input`]: {'accent-color': hex}})
  }

  const [primaryButtonColor, setPrimaryButtonColor] = useState('#F9FBFC');
    const handlePrimaryButtonColorChange = (value: Color, hex: string) => {
        setPrimaryButtonColor(hex)

        setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} [type=button]`]: {'color': hex}})
    }

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>Selection Color</PanelHeaderDiv>, 
      children: <div className="pb-8 ">
                  <div className="flex my-1">
                    <ColorPicker className="bld-round-colorpicker" value={headingColor} onChange={handleHeadingColor} />
                    <ItemTextDiv className="inline-block my-auto ml-2" >Heading Color</ItemTextDiv> 
                  </div>
                  <div className="flex my-1">
                    <ColorPicker className="bld-round-colorpicker" value={paragraphColor} onChange={handleParagraphColorChange} />
                    <ItemTextDiv className="inline-block my-auto ml-2" >Paragraph Color</ItemTextDiv> 
                  </div>
                  <div className="flex my-1">
                    <ColorPicker className="bld-round-colorpicker" value={accentColor} onChange={handleAccentColorChange} />
                    <ItemTextDiv className="inline-block my-auto ml-2" >Accent Color</ItemTextDiv> 
                  </div>
                  <div className="flex my-1">
                    <ColorPicker className="bld-round-colorpicker" value={primaryButtonColor} onChange={handlePrimaryButtonColorChange} />
                    <ItemTextDiv className="inline-block my-auto ml-2" >Primary button text</ItemTextDiv> 
                  </div>
                </div>
    }
  ]


  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel"
    />
  )
}

function SPBackground() {

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <div className="flex">
          <Avatar shape="square" size="small" icon={"1"} className={`border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] text-black`} />
          <PanelHeaderDiv className="inline-block ml-2">Backgrounds</PanelHeaderDiv>
        </div>, 
      children: <div className="pb-8 ">
                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Base Color</ItemHeaderDiv>
                    <div className={`border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] flex p-1`}>
                      <ColorPicker className="bld-round-colorpicker" value={"#F9FBFC"} />
                      
                      <div className={`border border-solid border-[#EDEFF1] rounded-md bg-white flex item-center px-2`}>
                        <ColorsIcon className="m-auto" />
                        <ItemTextDiv className="ml-2" >100%</ItemTextDiv>
                      </div>

                      <EyeIcon className="ml-auto my-auto" />
                      <LockIcon className="my-auto mx-2" />
                    </div>
                  </div>
                </div>
    }
  ]


  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel"
    />
  )
}

function SPSectionSizeAndPaddings() {

  const { editor } = useSelector((store: any) => store.pageBuilder)

  const [marginTop, setMarginTop] = useState<string>('mtNone');
  const handleMarginTop = ({value}: { value: string; label: React.ReactNode }) => {
    setMarginTop(value)
    
    setComponentSetting(editor, SECTION_TOP_PADDING[value])
  };

  const [marginBottom, setMarginBottom] = useState<string>('mbNone');
  const handleMarginBottom = ({value}: { value: string; label: React.ReactNode }) => {
    setMarginBottom(value)

    setComponentSetting(editor, SECTION_BOTTOM_PADDING[value])
  };


  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>Section size and paddings</PanelHeaderDiv>, 
      children: <div className="pb-8 ">
                  <div className={`border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] relative py-8 px-4`}>

                    <div className={`border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] p-0 absolute -mt-4 ml-[calc((100%_-_6rem)_/_2)]`} >
                      <Select
                        value={marginTop}
                        options={[
                          { value: 'mtNone', label: '-' },
                          { value: 'mt_s', label: 'S' },
                          { value: 'mt_m', label: 'M' },
                          { value: 'mt_l', label: 'L' },
                        ]}
                        className="w-[60px] h-[28px]"
                        onChange={handleMarginTop}
                      />
                    </div>
                    
                    <div className={`border border-solid border-[#EDEFF1] rounded-md bg-[#F9FBFC] flex item-center p-8 w-full`} >
                      <AlignLeftArrow2 className="ml-auto my-auto mr-2" />
                      <div className={`border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] p-0`}>
                        <Select
                          defaultValue="inset"
                          options={[
                            { value: 'fullScreen', label: 'Full screen' },
                            { value: 'inset', label: 'Inset' },
                          ]}
                          className="h-[28px]"
                        />
                      </div>
                      <AlignRightArrow2 className="mr-auto my-auto ml-2" />
                    </div>

                    <div className={`border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] p-0 absolute mb-4 ml-[calc((100%_-_6rem)_/_2)] bottom-0`} >
                      <Select
                        value={marginBottom}
                        options={[
                          { value: 'mbNone', label: '-' },
                          { value: 'mb_s', label: 'S' },
                          { value: 'mb_m', label: 'M' },
                          { value: 'mb_l', label: 'L' },
                        ]}
                        className="w-[60px] h-[28px]"
                        onChange={handleMarginBottom}
                      />
                    </div>

                  </div>
                </div>
    }
  ]

  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel"
    />
  )
}

function SPMinHeight() {

  const { editor } = useSelector((store: any) => store.pageBuilder)


  const setStyleSheet = (style: Record<string, string>) => {
    const selectedComponent = editor.getSelected();

    if (selectedComponent) {
        selectedComponent.addStyle(style);
    }
  }

  const [ height, setHeight ] = useState<string | number>('H_S')
  const handleHeight = (height: string | number) => {
    setHeight(height)

    setStyleSheet(HEIGHT[height])
  }

  const [verticalAlign, setVerticalAlign] = useState<string | number>('VATop');
  const handleVerticalAlignChange = (verticalAlign: string | number) => {
      setVerticalAlign(verticalAlign)

      setStyleSheet(VERTICAL_ALIGN[verticalAlign])
  }

  const HeightOptions = [
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'H_S',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'H_M',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'H_L',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>XL</ItemTextDiv>, 
      value: 'H_XL',
      className: 'w-1/4 py-1.5', 
    }, 
  ]

  const VerticalAlignmentOptions = [
    {
      label: <AlignTopArrowIcon className="m-auto" />, 
      value: 'VATop',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignVerticalCenter className="m-auto" />, 
      value: 'VACenter',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignBottomArrowIcon className="m-auto" />, 
      value: 'VABottom',
      className: 'w-1/3 py-1.5', 
    }, 
  ]

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <>
              <Switch size="small" className="mb-1 bld-ant-switch" />
              <PanelHeaderDiv className="inline-block ml-4">Minimum Height</PanelHeaderDiv>
            </>,
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

        <div>
          <ItemHeaderDiv className={`mb-2`}>Height</ItemHeaderDiv>
          <Segmented options={HeightOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} value={height} onChange={handleHeight} ></Segmented>
        </div>
        <div>
          <ItemHeaderDiv className={`mb-2`}>Vertical Alignment</ItemHeaderDiv>
          <Segmented options={VerticalAlignmentOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} value={verticalAlign} onChange={handleVerticalAlignChange} ></Segmented>
        </div>

      </div>,
    }
  ]

  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel"
    />
  )
}

function SPImage() {

  const { editor } = useSelector((store: any) => store.pageBuilder)

  const [ showAlign, setShowAlign ] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState(100);

  const onChange = (newValue: number) => {
    setInputValue(newValue);

    setShowAlign(newValue !== 100)
    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_IMAGE}`]: {width: `${newValue}%`, height: 'auto'}})
  };

  const [ align, setAlign ] = useState<string | number>('ALeft')
  const handleAlign = (align: string | number) => {
    setAlign(align)

    setComponentSetting(editor, GALLERY_ALIGN[align])
  }


  const AlignOptions = [
    {
      label: <AlignLeftArrow className="m-auto" />, 
      value: 'ALeft',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignCenterArrow className="m-auto" />, 
      value: 'ACenter',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignRightArrow className="m-auto" />, 
      value: 'ARight', 
      className: 'w-1/3 py-1.5', 
    }
  ]

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>Image</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Image size</ItemHeaderDiv>
                    <Row>
                      <Col span={4}>
                        <PanelDiv44 className="mr-auto pt-2">
                          0
                        </PanelDiv44>
                      </Col>
                      <Col span={16}>
                        <Slider
                          min={0}
                          max={100}
                          onChange={onChange}
                          value={typeof inputValue === 'number' ? inputValue : 0}
                          className="mx-4 bld-slider"
                        />
                      </Col>
                      <Col span={4}>
                       <PanelDiv44 className="ml-auto pt-2">
                          {inputValue}
                        </PanelDiv44>
                      </Col>
                    </Row>
                  </div>

                  {
                    showAlign &&
                    <div>
                      <ItemHeaderDiv className={`mb-2`}>Align</ItemHeaderDiv>
                      <Segmented options={AlignOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} value={align} onChange={handleAlign} ></Segmented>
                    </div>
                  }

                </div>
    }
  ]


  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    />
  )
}

function SPGallery() {

  const { editor } = useSelector((store: any) => store.pageBuilder)
  const [ attrKey, setAttrKey ] = useState<string>('gallery')

  useEffect(() => {
    setTimeout(() => {
      setInitPanelSetting( editor, attrKey, Object.keys(GALLERY_TYPE), handleType )
      setInitPanelSetting( editor, attrKey, Object.keys(GALLERY_GRID_TYPE), handleGridType )
      setInitPanelSetting( editor, attrKey, Object.keys(GALLERY_COLUMNS), handleColumns )
      setInitPanelSetting( editor, attrKey, [], handleLastItemAlignment )
      setInitPanelSetting( editor, attrKey, Object.keys(GALLERY_GAPS), handleGaps )
    }, 1000)
  }, [])

  const [ isGrid, setIsGrid ] = useState<boolean>(true)

  const [ type, setType ] = useState<string | number>('TGrid')
  const handleType = (type: string | number) => {
    setType(type)

    setIsGrid(type === "TGrid")
  }

  const [ gridType, setGridType ] = useState<string | number>('GTSquares')
  const handleGridType = (gridType: string | number) => {
    setGridType(gridType)
  }

  const [ columns, setColumns ] = useState<string | number>('C_3')
  const handleColumns = (columns: string | number) => {
    setColumns(columns)
  }

  const [ lastItemAlignment, setLastItemAlignment ] = useState<string | number>('LIALeft')
  const handleLastItemAlignment = (lastItemAlignment: string | number) => {
    setLastItemAlignment(lastItemAlignment)
  }

  const [ gaps, setGaps ] = useState<string | number>('GM')
  const handleGaps = (gaps: string | number) => {
    setGaps(gaps)
  }


  useEffect(() => {
    setGallerySetting(editor, type, gridType, columns, lastItemAlignment , gaps)

    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
    const allAttributes = mainComponent?.getAttributes()

    mainComponent?.setAttributes({...allAttributes, [attrKey]: [ type, gridType, columns, lastItemAlignment, gaps ].join(' ')})
  }, [ type, gridType, columns, lastItemAlignment , gaps])

  const TypeOptions = [
    {
      label: <ItemTextDiv>Grid</ItemTextDiv>, 
      value: 'TGrid',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>Carousel</ItemTextDiv>, 
      value: 'TCarousel',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const GridTypeOptions = [
    {
      label: <div>
        <SquaresIcon className="m-auto" />
        <ItemTextDiv14>Squares</ItemTextDiv14>
      </div>, 
      value: 'GTSquares',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <div>
        <MasonryIcon className="m-auto" />
        <ItemTextDiv14>Masonry</ItemTextDiv14>
      </div>, 
      value: 'GTMasonry',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <div>
        <BasicIcon className="m-auto" />
        <ItemTextDiv14>Basic</ItemTextDiv14>
      </div>, 
      value: 'GTBasic',
      className: 'w-1/3 py-1.5', 
    }, 
  ]

  const ColumnOptions = [
    {
      label: <ItemTextDiv>1</ItemTextDiv>, 
      value: 'C_1',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>2</ItemTextDiv>, 
      value: 'C_2',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>3</ItemTextDiv>, 
      value: 'C_3',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>4</ItemTextDiv>, 
      value: 'C_4',
      className: 'w-1/4 py-1.5', 
    }, 
  ]

  const LastItemAlignmentOptions = [
    {
      label: <AlignLeftArrow className="m-auto" />, 
      value: 'LIALeft',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignCenterArrow className="m-auto" />, 
      value: 'LIACenter',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignRightArrow className="m-auto" />, 
      value: 'LIARight',
      className: 'w-1/3 py-1.5', 
    }, 
  ]

  const GapsOptions = [
    {
      label: <ItemTextDiv>-</ItemTextDiv>, 
      value: 'GNone',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'GS',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'GM',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'GL',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>XL</ItemTextDiv>, 
      value: 'GXL',
      className: 'w-1/5 py-1.5', 
    }, 
  ]

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>Gallery</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3 ">

                  <div className="grid grid-cols-1 gap-y-3">

                    <div>
                      <ItemHeaderDiv className={`mb-2`}>Type</ItemHeaderDiv>
                      <Segmented options={TypeOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleType} value={ type } ></Segmented>
                    </div>

                    {
                      isGrid
                        &&
                      <div>
                        <ItemHeaderDiv className={`mb-2`}>Grid Type</ItemHeaderDiv>
                        <Segmented options={GridTypeOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px] bld-ant-segmented`} onChange={handleGridType} value={ gridType } ></Segmented>
                      </div>
                    }
                    {
                      isGrid && 
                      <div>
                        <ItemHeaderDiv className={`mb-2`}>Columns</ItemHeaderDiv>
                        <Segmented options={ColumnOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleColumns} value={ columns } ></Segmented>
                      </div>

                    }

                    {
                      isGrid && 
                      <div>
                        <ItemHeaderDiv className={`mb-2`}>Last item alignment</ItemHeaderDiv>
                        <Segmented options={LastItemAlignmentOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleLastItemAlignment} value={ lastItemAlignment } ></Segmented>
                      </div>
                    }

                    <div>
                      <ItemHeaderDiv className={`mb-2`}>Gaps</ItemHeaderDiv>
                      <Segmented options={GapsOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleGaps} value={ gaps } ></Segmented>
                    </div>

                    <div className="flex mb-1">
                      <ItemHeaderDiv className={`mb-2 flex items-center`}>Reset overrides</ItemHeaderDiv>
                      <div className={`ml-auto border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] flex items-center`}>
                        <RefreshIcon className="my-2 mx-4" />
                      </div>
                    </div>
                  </div>

                </div>
    }
  ]


  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    />
  )
}

function SPVideoSection() {

  const { editor } = useSelector((store: any) => store.pageBuilder)
  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue: number) => {
    setInputValue(newValue);

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_VIDEO}`]: {'width': `${newValue}%`}})
  };

  const handleBeforeUploadPoster = async (file: UploadFile) => {
    const reader = new FileReader();

    // Use a Promise to read the file as base64
    const base64Data: string = await new Promise((resolve, reject) => {
        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target && e.target.result) {
                const result: string | ArrayBuffer = e.target.result;
                if (typeof result === 'string') {
                    resolve(result); // Resolve with the base64 data
                } else {
                    reject(new Error('File is not a string'));
                }
            } else {
                reject(new Error('File read error'));
            }
        };

        reader.onerror = () => {
            reject(new Error('File read error'));
        };

        reader.readAsDataURL(file)

    });
    
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent.find(`.${CT_MAIN_COMPONENT}`)[0]

    const videoIframe = mainComponent.find(`.${CT_IFRAME}`)[0]

    if(videoIframe && base64Data ) {
      videoIframe.setAttributes({ style: 'display: none;' });
    }

    return false
  }


  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>Video Section</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Video size</ItemHeaderDiv>
                    <Row>
                      <Col span={4}>
                        <PanelDiv44 className="mr-auto pt-2">
                          50
                        </PanelDiv44>
                      </Col>
                      <Col span={16}>
                        <Slider
                          min={50}
                          max={100}
                          onChange={onChange}
                          value={typeof inputValue === 'number' ? inputValue : 50}
                          className="mx-4 bld-slider"
                        />
                      </Col>
                      <Col span={4}>
                       <PanelDiv44 className="ml-auto pt-2">
                          {inputValue}
                        </PanelDiv44>
                      </Col>
                    </Row>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Video Poster</ItemHeaderDiv>

                    <Upload 
                          className="bld-upload"
                          maxCount={1}
                          showUploadList={true}
                          multiple={false}
                          beforeUpload={handleBeforeUploadPoster}
                      >
                        <Button 
                            className={`!border-[#EDEFF1] h-[44px] text-[#294753] text-[16px] font-semibold w-full hover:!text-[#294753] flex justify-center items-center`} 
                            icon={<AlignTopArrow20Icon />} 
                        >
                            <span >Upload Image</span>
                        </Button>
                    </Upload>
                  </div>

                </div>
    }
  ]


  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    />
  )
}

function SPList() {

  const { editor } = useSelector((store: any) => store.pageBuilder)


  useEffect(() => {
    setInitPanelSetting(editor, 'splist', Object.keys(LIST_COLUMNS), handleColumns)
    setInitPanelSetting(editor, 'splist', Object.keys(LIST_GAPS), handleGaps)
    setInitPanelSetting(editor, 'splist', Object.keys(LIST_ITEM_ROW_ALIGNMENT), handleRowAlignment)
    setInitPanelSetting(editor, 'splist', Object.keys(LIST_LAST_ITEM_ALIGN), handleLastItemAlignment)
  }, [])

  const [ columns, setColumns ] = useState<string | number>('LC_1')
  const handleColumns = (columns: string | number) => {
    setColumns(columns)

    setComponentSetting(editor, LIST_COLUMNS[columns])
  }

  const [ gaps, setGaps ] = useState<string | number>('LGNone')
  const handleGaps = (gaps: string | number) => {
    setGaps(gaps)

    setComponentSetting(editor, LIST_GAPS[gaps])
  }

  const [rowAlignment, setRowAlignment] = useState<string | number>('RATop');
  const handleRowAlignment = (rowAlignment: string | number) => {
    setRowAlignment(rowAlignment)

    setComponentSetting(editor, LIST_ITEM_ROW_ALIGNMENT[rowAlignment])
  }

  const [lastItemAlignment, setLastItemAlignment] = useState<string | number>('LIALeft');
  const handleLastItemAlignment = (lastItemAlignment: string | number) => {
    setLastItemAlignment(lastItemAlignment)

    setComponentSetting(editor, LIST_LAST_ITEM_ALIGN[lastItemAlignment])
  }

  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]

    mainComponent?.setAttributes({'splist': [columns, gaps, rowAlignment, lastItemAlignment].join(' ')})
  }, [columns, gaps, rowAlignment, lastItemAlignment])


  const ListColumnOptions = [
    {
      label: <ItemTextDiv>1</ItemTextDiv>, 
      value: 'LC_1',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>2</ItemTextDiv>, 
      value: 'LC_2',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>3</ItemTextDiv>, 
      value: 'LC_3',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>4</ItemTextDiv>, 
      value: 'LC_4',
      className: 'w-1/4 py-1.5', 
    }, 
  ]

  const ListGapsOptions = [
    {
      label: <ItemTextDiv>-</ItemTextDiv>, 
      value: 'LGNone',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'LGS',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'LGM',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'LGL',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>XL</ItemTextDiv>, 
      value: 'LGML',
      className: 'w-1/5 py-1.5', 
    }, 
  ]

  const RowAlignmentOptions = [
    {
      label: <AlignTopArrowIcon className="m-auto" />, 
      value: 'RATop',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <AlignVerticalCenter className="m-auto" />, 
      value: 'RACenter',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <AlignBottomArrowIcon className="m-auto" />, 
      value: 'RABottom',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <SpacingHeightIcon className="m-auto" />, 
      value: 'RASpacing',
      className: 'w-1/4 py-1.5', 
    }, 
  ]

  const ListItemAlignmentOptions = [
    {
      label: <AlignLeftArrow className="m-auto" />, 
      value: 'LIALeft',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignCenterArrow className="m-auto" />, 
      value: 'LIACenter',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignRightArrow className="m-auto" />, 
      value: 'LIARight', 
      className: 'w-1/3 py-1.5', 
    }
  ]


  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>List</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                    <div>
                      <ItemHeaderDiv className={`mb-2`}>Columns</ItemHeaderDiv>
                      <Segmented options={ListColumnOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleColumns} value={ columns } ></Segmented>
                    </div>

                    <div>
                      <ItemHeaderDiv className={`mb-2`}>Gaps</ItemHeaderDiv>
                      <Segmented options={ListGapsOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleGaps} value={ gaps } ></Segmented>
                    </div>

                    <div>
                      <ItemHeaderDiv className={`mb-2`}>Row alignment</ItemHeaderDiv>
                      <Segmented options={RowAlignmentOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleRowAlignment} value={ rowAlignment } ></Segmented>
                    </div>

                    <div>
                      <ItemHeaderDiv className={`mb-2`}>Last item alignment</ItemHeaderDiv>
                      <Segmented options={ListItemAlignmentOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleLastItemAlignment} value={ lastItemAlignment } ></Segmented>
                    </div>

                </div>
    }
  ]


  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    />
  )
}

function SPListItem() {
  const { editor } = useSelector((store: any) => store.pageBuilder)

  useEffect(() => {
    setInitPanelSetting(editor, 'splistitem', Object.keys(LIST_ITEM_LAYOUT), handleLayout)
  }, [])

  const [ layout, setLayout ] = useState<string | number>('LCenter')
  const handleLayout = (layout: string | number) => {
    setLayout(layout)

    setComponentSetting(editor, LIST_ITEM_LAYOUT[layout])
  }

  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]

    mainComponent?.setAttributes({'splistitem': [layout].join(' ')})
  }, [layout])

  const LayoutOptions = [
    {
      label: <RowsIcon className="m-auto" />, 
      value: 'LCenter',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <RowsLeftIcon className="m-auto" />, 
      value: 'LLeft',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <RowsRightIcon className="m-auto" />, 
      value: 'LRight',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <TypeSquareIcon className="m-auto" />, 
      value: 'LSpacing',
      className: 'w-1/4 py-1.5', 
    }, 
  ]

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>List item</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Layout</ItemHeaderDiv>
                    <Segmented options={LayoutOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleLayout} value={ layout } ></Segmented>
                  </div>

                </div>
    }
  ]


  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    />
  )
}

function SPMap() {

  const { editor } = useSelector((store: any) => store.pageBuilder)
  const [ attrKey, setAttrKey ] = useState<string>('map')

  useEffect(() => {
    setTimeout(() => {
      setInitPanelSetting( editor, attrKey, Object.keys(MAP_WIDTH), handleMapWidth )
      setInitPanelSetting( editor, attrKey, Object.keys(MAP_ALIGN), handleMapAlign )
      setInitPanelSetting( editor, attrKey, Object.keys(MAP_HEIGHT), handleMapHeight )
      setInitPanelSetting( editor, attrKey, [], handleMapColor, true, 'mc-')
      setInitPanelSetting( editor, attrKey, [], handleShowMapControlsS2B, true, 'msmc-')
    }, 1000)
  }, [])


  const [ mapWidth, setMapWidth ] = useState<string | number>('MWFull')
  const handleMapWidth = (mapWidth: string | number) => {
    setMapWidth(mapWidth)

    setComponentSetting(editor, MAP_WIDTH[mapWidth])
  }

  const [ mapAlign, setMapAlign ] = useState<string | number>('MALeft')
  const handleMapAlign = (mapAlign: string | number) => {
    setMapAlign(mapAlign)

    setComponentSetting(editor, MAP_ALIGN[mapAlign])
  }

  const [ mapHeight, setMapHeight ] = useState<string | number>('MH_S')
  const handleMapHeight = (mapHeight: string | number) => {
    setMapHeight(mapHeight)

    setComponentSetting(editor, MAP_HEIGHT[mapHeight])
  }

  const handleShowMapControlsS2B = (value: string) => {handleShowMapControls(value === "true")}
  const [ showMapControls, setShowMapControls ] = useState<boolean>(false)
  const handleShowMapControls = (checked: boolean) => {
    setShowMapControls(checked)
  }

  const [ mapColor, setMapColor ] = useState<string | number>('light')
  const handleMapColor = (mapColor: string | number) => {
    setMapColor(mapColor)

  }


  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
    const allAttributes = mainComponent?.getAttributes()

    mainComponent?.setAttributes({...allAttributes, [attrKey]: [ mapWidth, mapAlign, mapHeight, `msmc-${showMapControls}`, `mc-${mapColor}` ].join(' ')})
  }, [ mapWidth, mapAlign, mapHeight, showMapControls, mapColor ])



  const MapWidthOptions = [
    {
      label: <ItemTextDiv>Full</ItemTextDiv>, 
      value: 'MWFull',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>2/3</ItemTextDiv>, 
      value: 'MW2_3',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>1/2</ItemTextDiv>, 
      value: 'MW1_2', 
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>1/3</ItemTextDiv>, 
      value: 'MW1_3', 
      className: 'w-1/4 py-1.5', 
    }, 
  ]

  const MapAlignOptions = [
    {
      label: <AlignLeftArrow className="m-auto" />, 
      value: 'MALeft',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignCenterArrow className="m-auto" />, 
      value: 'MACenter',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <AlignRightArrow className="m-auto" />, 
      value: 'MARight', 
      className: 'w-1/3 py-1.5', 
    }
  ]

  const MapHeightOptions = [
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'MH_S',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'MH_M',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'MH_L',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>XL</ItemTextDiv>, 
      value: 'MH_XL',
      className: 'w-1/4 py-1.5', 
    }, 
  ]

  const MapColorOptions = [
    { value: 'light', label: 'Light' },
    { value: 'black', label: 'Black' },
  ]

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>Map</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Map Width</ItemHeaderDiv>
                    <Segmented options={MapWidthOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleMapWidth} value={mapWidth} ></Segmented>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Align</ItemHeaderDiv>
                    <Segmented options={MapAlignOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} value={mapAlign} onChange={handleMapAlign} ></Segmented>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`}>Map Height</ItemHeaderDiv>
                    <Segmented options={MapHeightOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} value={mapHeight} onChange={handleMapHeight} ></Segmented>
                  </div>

                  <div className="flex">
                    <ItemHeaderDiv className={`mb-2`} >Map controls</ItemHeaderDiv>
                    <Switch size="small" className={`mb-1 bld-ant-switch ml-auto`} checked={showMapControls} onChange={(checked: boolean, event: Event) => handleShowMapControls(checked)}  />
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Map colors</ItemHeaderDiv>
                    <Select
                      defaultValue={mapColor}
                      className={`mb-1 ml-auto w-full bld-default-select`}
                      onChange={handleMapColor}
                      options={MapColorOptions}
                      popupClassName="bld-select-dropdown"
                    />
                  </div>

                </div>
    }
  ]


  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    />
  )
}

function SPJobs() {

  const { editor, jobTableColumnFilter } = useSelector((store: any) => store.pageBuilder)
  const dispatch = useDispatch()

  const [ arrJobs, setArrJobs ] = useState<any[]>(jobs)

  useEffect(() => {

  }, [])



  const [ showTableSpacing, setShowTableSpacing ] = useState<boolean>(false)

  const [ displayAs, setDisplayAs ] = useState<string | number>('DACards')
  const handleDisplayAs = (displayAs: string | number) => {
    setDisplayAs(displayAs)

    setComponentSetting(editor, JOB_DISPLAY_AS[displayAs])
    setShowTableSpacing(displayAs === "DATable")
    dispatch(setJobDisplayAs(displayAs as string))

    const editorComponent = editor.getWrapper()
    const jobComponents = editorComponent?.find(`.${CT_JOB}`)
    if(displayAs === "DATable"){

      jobComponents.map((jobComponent: Component) => {
        jobComponent.components().reset()
        
        const cmp = editor.Components
        const newComponent = cmp.addComponent({
            tagName: "table", 
            attributes: { class: 'text-wrap col-12' }, 
            content: getJobTable(arrJobs, jobTableColumnFilter, showTableButton)
        })

        jobComponent.append(newComponent)
      })

    } else {
      jobComponents.map((jobComponent: Component) => {
        jobComponent.components().reset()
        
        const cmp = editor.Components
        const newComponent = cmp.addComponent({
            attributes: { class: 'col-12' }, 
            content: getJobCard(arrJobs)
        })

        jobComponent.append(newComponent)
      })
      
    }

    editor.Components.addComponent({
      type: 'script', 
      script: `${getJobJavascript()}`
    })
  }

  const [ tableSpacing, setTableSpacing ] = useState<string | number>('TS_S')
  const handleTableSpacing = (tableSpacing: string | number) => {
    setTableSpacing(tableSpacing)

    setComponentSetting(editor, JOB_TABLE_SPACING[tableSpacing])
  }

  const [ showTableButton, setShowTableButton ] = useState<boolean>(true)

  const [ sortJobs, setSortJobs ] = useState<string | number>('alphabetically')
  const handleSortJobs = (sortJobs: string | number) => {
    setSortJobs(sortJobs)

  }

  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const jobComponents = editorComponent?.find(`.${CT_JOB}`)
    if(displayAs === "DATable"){

      jobComponents.map((jobComponent: Component) => {
        jobComponent.components().reset()
        
        const cmp = editor.Components
        const newComponent = cmp.addComponent({
            tagName: "table", 
            attributes: { class: 'text-wrap col-12' }, 
            content: getJobTable(arrJobs, jobTableColumnFilter, showTableButton)
        })

        jobComponent.append(newComponent)
      })

    }

  }, [jobTableColumnFilter, showTableButton])


  const DisplayAsOptions = [
    {
      label: <ItemTextDiv>Cards</ItemTextDiv>, 
      value: 'DACards',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>Table</ItemTextDiv>, 
      value: 'DATable',
      className: 'w-1/2 py-1.5', 
    }, 
  ]


  const TableSpacingOptions = [
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'TS_S',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'TS_M',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const SortjobsOptions = [
    { value: 'alphabetically', label: <div className="flex items-center"><ParagraphSpacingIcon className="mr-2" /> Alphabetically </div> },
    { value: 'black', label: 'Black' },
  ]

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>Jobs</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Display as</ItemHeaderDiv>
                    <Segmented options={DisplayAsOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleDisplayAs} value={displayAs} ></Segmented>
                  </div>

                  {
                    showTableSpacing && 
                    <div>
                      <EditTableColumnModal />
                    </div>
                  }

                  {
                    showTableSpacing 
                      && 
                    <div>
                      <ItemHeaderDiv className={`mb-2`}>Table spacing</ItemHeaderDiv>
                      <Segmented options={TableSpacingOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} value={tableSpacing} onChange={handleTableSpacing} ></Segmented>
                    </div>
                  }

                  {
                    showTableSpacing && 
                    <div className="flex">
                      <ItemHeaderDiv className={`mb-2`} >Show Button</ItemHeaderDiv>
                      <Switch size="small" className={`mb-1 bld-ant-switch ml-auto`} checked={showTableButton} onChange={(checked: boolean, event: Event) => setShowTableButton(checked)} />
                    </div>
                  }

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Sort jobs</ItemHeaderDiv>
                    <Select
                      defaultValue={sortJobs}
                      className={`mb-1 bld-ant-switch ml-auto w-full bld-default-select`}
                      onChange={handleSortJobs}
                      options={SortjobsOptions}
                      popupClassName="bld-select-dropdown"
                    >
                    </Select>
                  </div>

                </div>
    }
  ]


  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    />
  )
}

function SPJobCardLayout() {

  const { editor, jobDisplayAs } = useSelector((store: any) => store.pageBuilder)
  const [ attrKey, setAttrKey ] = useState<string>('jobcardlayout')



  useEffect(() => {
    setTimeout(() => {
      setInitPanelSetting(editor, attrKey, Object.keys(JOB_CARD_TITLE_SIZE), handleJobTitleSize)
      setInitPanelSetting(editor, attrKey, [], handleJobCardBackground, true, 'jcb-')
      setInitPanelSetting(editor, attrKey, Object.keys(JOB_CARD_INNER_PADDING), handleJobInnerPadding)
    }, 1000)
  }, [])


  const [ jobTitleSize, setJobTitleSize ] = useState<string | number>('JTS_M')
  const handleJobTitleSize = (jobTitleSize: string | number) => {
    setJobTitleSize(jobTitleSize)

    setComponentSetting(editor, JOB_CARD_TITLE_SIZE[jobTitleSize])
  }

  const [ applyButton, setApplyButton ] = useState<string | number>('APOff')
  const handleApplyButton = (applyButton: string | number) => {
    setApplyButton(applyButton)

  }

  const [ jobCardBackground, setJobCardBackground ] = useState<string>('#fff')
  const handleJobCardBackground = (hex: string) => {
    setJobCardBackground(hex)

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_JOB_CARD}`]: {'background-color': hex}})
  }

  const [ jobInnerPadding, setJobInnerPadding ] = useState<string | number>('JIP_M')
  const handleJobInnerPadding = (jobInnerPadding: string | number) => {
    setJobInnerPadding(jobInnerPadding)

    setComponentSetting(editor, JOB_CARD_INNER_PADDING[jobInnerPadding])
  }


  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]

    mainComponent?.setAttributes({[attrKey]: [jobTitleSize, applyButton, `jcb-${jobCardBackground}`, jobInnerPadding].join(' ')})
  }, [jobTitleSize, applyButton, jobCardBackground, jobInnerPadding])


  const JobTitleSizeOptions = [
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'JTS_M',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'JTS_L',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const ApplyButtonOptions = [
    {
      label: <EyeOffIcon className="m-auto" />, 
      value: 'APOff',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <FlexAlignTopIcon className="m-auto" />, 
      value: 'APTop',
      className: 'w-1/3 py-1.5', 
    }, 
    {
      label: <FlexAlignBottomIcon className="m-auto" />, 
      value: 'APBottom',
      className: 'w-1/3 py-1.5', 
    }, 
  ]

  const JobInnerPaddingOptions = [
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'JIP_S',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'JIP_M',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'JIP_L',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>XL</ItemTextDiv>, 
      value: 'JIP_XL',
      className: 'w-1/4 py-1.5', 
    }, 
  ]


  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>Job card layout</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Job title size</ItemHeaderDiv>
                    <Segmented options={JobTitleSizeOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleJobTitleSize} value={jobTitleSize} ></Segmented>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Apply button</ItemHeaderDiv>
                    <Segmented options={ApplyButtonOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleApplyButton} value={applyButton} ></Segmented>
                  </div>

                  <div className="flex mb-1 justify-between">
                    <ItemHeaderDiv className={`mb-2 flex items-center`}>Background</ItemHeaderDiv>
                    <ColorPicker 
                      onChange={(value: Color, hex: string) => handleJobCardBackground(hex)} 
                      value={jobCardBackground} />
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Job inner padding</ItemHeaderDiv>
                    <Segmented options={JobInnerPaddingOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleJobInnerPadding} value={jobInnerPadding} ></Segmented>
                  </div>

                </div>
    }
  ]


  return (
    jobDisplayAs === "DACards" ? 
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    /> : null
  )
}

function SPJobFilters() {
  const { editor, jobFilterColumn } = useSelector((store: any) => store.pageBuilder)
  const [ arrJobs, setArrJobs ] = useState<any[]>(jobs)
  const [ attrKey, setAttrKey ] = useState<string>('jobfilter')

  useEffect(() => {
    setTimeout(() => {
      setInitPanelSetting(editor, attrKey, [], handleFilterS2B, true, 'jfs-')
      setInitPanelSetting(editor, attrKey, Object.keys(JOB_FILTER_POSITION), handlePosition)
      setInitPanelSetting(editor, attrKey, [], handleLayout)
      setInitPanelSetting(editor, attrKey, [], haldleFilterHeaderS2B, true, 'jfhs-')
    }, 1000)
  }, [])


  const [ showFilterHeader, setShowFilterHeader ] = useState<boolean>(true)
  const haldleFilterHeaderS2B = (value: string) => {
    setShowFilterHeader(value === "true")
  }


  const [ filterChecked, setFilterChecked ] = useState<boolean>(false)
  const handleFilterS2B = (value: string) => {
    handleFilterchange(value === "true")
  }
  const handleFilterchange = (checked: boolean) => {

    if(checked) {
      handlePosition("PAlign")
      handleLayout("LBoxed")
    } 

    setFilterChecked(checked)
  }

  const [ position, setPosition ] = useState<string | number>('PAlign')
  const handlePosition = (position: string | number) => {
    setPosition(position)
    
    setComponentSetting(editor, JOB_FILTER_POSITION[position])
  }

  const [ layout, setLayout ] = useState<string | number>('LBoxed')
  const handleLayout = (layout: string | number) => {
    setLayout(layout)

  }

  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]

    const allAttributes = mainComponent?.getAttributes()

    mainComponent?.setAttributes({...allAttributes, [attrKey]: [`jfs-${filterChecked}`, `jfhs-${showFilterHeader}`, position, layout].join(' ')})

  }, [filterChecked, showFilterHeader, position, layout])

  useEffect(() => {
    const components = editor.getComponents()



    const editorComponent = editor.getWrapper()
    const filterComponents = editorComponent?.find(`.${CT_JOB_FILTER_CONTAINER}`)

    filterComponents.map((filterComponent: Component) => {
      filterComponent.components().reset()
      if(filterChecked) {

        const cmp = editor.Components
        const newComponent = cmp.addComponent({
            tagName: "div", 
            attributes: { class: `job-page-filter` }, 
            content: getJobFilter(arrJobs, jobFilterColumn, showFilterHeader)
        })
        filterComponent.append(newComponent)
      }
    })
  }, [filterChecked, showFilterHeader, jobFilterColumn])

  const PositionOptions = [
    {
      label: <RowsIcon className="m-auto" />, 
      value: 'PAlign',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <RowsLeftIcon className="m-auto" />, 
      value: 'PLeft',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const LayoutOptions = [
    {
      label: <ItemTextDiv>Boxed</ItemTextDiv>, 
      value: 'LBoxed',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>Plain</ItemTextDiv>, 
      value: 'LPlain',
      className: 'w-1/2 py-1.5', 
    }, 
  ]


  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv><Switch size="small" checked={filterChecked} className={`mb-1 bld-ant-switch ml-auto mr-2`} onChange={(checked: boolean, event: Event) => handleFilterchange(checked)} />Filters</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Position</ItemHeaderDiv>
                    <Segmented options={PositionOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handlePosition} value={position} ></Segmented>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Layout</ItemHeaderDiv>
                    <Segmented options={LayoutOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleLayout} value={layout} ></Segmented>
                  </div>

                  <div className="flex">
                    <ItemHeaderDiv className={`mb-2`} >Show heading</ItemHeaderDiv>
                    <Switch size="small" defaultChecked className={`mb-1 bld-ant-switch ml-auto`} value={showFilterHeader} onChange={(checked: boolean) => setShowFilterHeader(checked)} />
                  </div>

                  <div>
                    <EditFilterColumnModal />
                  </div>

                </div>
    }
  ]

  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel  big-panel-full"
    />
  )
}

function SPJobGroups() {
  
  const { editor } = useSelector((store: any) => store.pageBuilder)
  const [ attrKey, setAttrKey ] = useState<string>('jobgroup')

  useEffect(() => {
    setTimeout(() => {
      setInitPanelSetting(editor, attrKey, [], handleCheckS2B, true, 'jgs-')
      setInitPanelSetting(editor, attrKey, [], handleGroupBy, true, "jgt-")
    }, 1000)
  }, [])

  const handleCheckS2B = (value: string) => {
    handleCheckGroup(value === "true")
  }
  const [ groupChecked, setGroupChecked ] = useState<boolean>()
  const handleCheckGroup = (checked: boolean) => {
    setGroupChecked(checked)

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_JOB_GROUP_CONTAINER}`]: {'display' : (checked ? "block": "none")}})
  }

  const [ groupBy, setGroupBy ] = useState<string>('department')
  const handleGroupBy = (value: string) => {
    setGroupBy(value)

    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
    const jobGroupTextComponent = mainComponent?.find(`.${CT_JOB_GROUP_CONTAINER} div`)[0]

    if(jobGroupTextComponent) {
      jobGroupTextComponent.components().reset()
      const cmp = editor.Components
      const newComponent = cmp.addComponent({
          type: "text", 
          attributes: { class: 'fw-bolder my-3' }, 
          content: JOB_TALBE_COLUMNS[value], 
      })
      jobGroupTextComponent.append(newComponent)
    }
  }

  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
    const allAttributes = mainComponent?.getAttributes()

    mainComponent?.setAttributes({...allAttributes, [attrKey]: [`jgt-${groupBy}`, `jgs-${groupChecked}`].join(' ')})
  }, [groupChecked, groupBy])

  const GroupByOptions = Object.keys(JOB_TALBE_COLUMNS).map((key: string) => {
    return {value: key, label: JOB_TALBE_COLUMNS[key]}
  })

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv><Switch size="small" checked={groupChecked} className={`mb-1 bld-ant-switch ml-auto mr-2`} onChange={(checked: boolean, event: Event) => handleCheckGroup(checked)} />Groups</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Group by</ItemHeaderDiv>

                    <Select
                        allowClear
                        value={groupBy}
                        style={{ width: '100%' }}
                        onChange={handleGroupBy}
                        options={GroupByOptions}
                        className={`bld-default-select w-full border-[#EAE7E6] focus:border-[#000000] border rounded-md h-[38px] flex items-center w-full overflow-hidden`}
                    />
                  </div>

                </div>
    }
  ]

  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    />
  )
}

function SPJobTabs() {

  const { editor } = useSelector((store: any) => store.pageBuilder)
  const [ attrKey, setAttrKey ] = useState<string>('jobtab')

  useEffect(() => {
    setTimeout(() => {
      setInitPanelSetting(editor, attrKey, [], handleTabByCheckedS2B, true, 'jts-')
      setInitPanelSetting(editor, attrKey, Object.keys(JOB_TAB_POSITION), handleJobTabPosition)
      setInitPanelSetting(editor, attrKey, Object.keys(JOB_TAB_TEXT_SIZE), handleJobTabTextSize)
    }, 1000)
  }, [])

  const [ tagByChecked, setTabByChecked ] = useState<boolean>(false)
  const handleTabByCheckedS2B = (value: string) => {handleTabByChecked(value === 'true')}
  const handleTabByChecked = (checked: boolean) => {
    setTabByChecked(checked)

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_JOB_TAB_COTNAINER}`]: {'display': (checked ? "block": 'none')}})
  }

  const [ tabBy, setTabBy ] = useState<string>('department')
  const handleTabBy = (value: string) => {
    setTabBy(value)

  }

  const [ jobTabPostion, setJobTabPosition ] = useState<string>("JTPTop")
  const handleJobTabPosition = (value: string) => {
    setJobTabPosition(value)
    
    setComponentSetting(editor, JOB_TAB_POSITION[value])
  }

  const [ jobTabTextSize, setJobTabTextSize ] = useState<string>("JTTS_M")
  const handleJobTabTextSize = (value: string) => {
    setJobTabTextSize(value)

    setComponentSetting(editor, JOB_TAB_TEXT_SIZE[value])
  }

  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]

    const allAttributes = mainComponent?.getAttributes()

    mainComponent?.setAttributes({...allAttributes, [attrKey]: [`jts-${tagByChecked}`, tabBy, jobTabPostion, jobTabTextSize].join(' ')})
  }, [tagByChecked, tabBy, jobTabPostion, jobTabTextSize])


  const TabByOptions = Object.keys(JOB_TALBE_COLUMNS).map((key: string) => {
    return {value: key, label: JOB_TALBE_COLUMNS[key]}
  })

  const JobTabPositionOptions = [
    {
      label: <RowsIcon className="m-auto" />, 
      value: 'JTPTop',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <RowsLeftIcon className="m-auto" />, 
      value: 'JTPLeft',
      className: 'w-1/2 py-1.5', 
    }, 
  ]


  const JobTabTextSize = [
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'JTTS_M',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'JTTS_L',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv><Switch size="small" checked={tagByChecked} className={`mb-1 bld-ant-switch ml-auto mr-2`} onChange={(checked: boolean) => handleTabByChecked(checked)} />Tabs</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Tab by</ItemHeaderDiv>
                    <Select
                        allowClear
                        value={tabBy}
                        onChange={handleTabBy}
                        options={TabByOptions}
                        className={`bld-default-select w-full border-[#EAE7E6] focus:border-[#000000] border rounded-md h-[38px] flex items-center overflow-hidden`}
                    />
                  </div>

                  <div >
                    <ItemHeaderDiv className={`mb-2`} >Position</ItemHeaderDiv>
                    <Segmented options={JobTabPositionOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleJobTabPosition} value={jobTabPostion} ></Segmented>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Text size</ItemHeaderDiv>
                    <Segmented options={JobTabTextSize} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleJobTabTextSize} value={jobTabTextSize} ></Segmented>
                  </div>


                </div>
    }
  ]

  
  return (
    <Collapse 
    items={items} 
    defaultActiveKey={[]}
    expandIconPosition="end"
    className="bld-setting-panel big-panel-full"
  />
  )
}

function SPQuotes() {

  const { editor } = useSelector((store: any) => store.pageBuilder)
  const [ attrKey, setAttrKey ] = useState<string>('quote')

  useEffect(() => {
    setTimeout(() => {
      setInitPanelSetting( editor, attrKey, Object.keys(QUOTE_TEXT_SIZE), handleTextSize )
      setInitPanelSetting(editor, attrKey, [], handleQuoteBackground, true, 'qbc-')
      setInitPanelSetting( editor, attrKey, Object.keys(QUOTE_PADDING), handleQuotePadding )
      setInitPanelSetting( editor, attrKey, Object.keys(QUOTE_AUTHOR_STYLE), handleStyle )
      setInitPanelSetting( editor, attrKey, Object.keys(QUOTE_AUTHOR_IMAGE_SIZE), handleImageSize )
      setInitPanelSetting( editor, attrKey, Object.keys(QUOTE_AUTHOR_IMAGE_SHAPE), handleImageShape )
      setInitPanelSetting( editor, attrKey, Object.keys(QUOTE_AUTHOR_TEXT_SIZE), handleAuthorTextSize )
      setInitPanelSetting( editor, attrKey, Object.keys(QUOTE_COTAINER_PADDING), handleQuoteContainerPadding )
      setInitPanelSetting(editor, attrKey, [], handleBackgroundColor, true, 'qcbc-')
      setInitPanelSetting(editor, attrKey, [], handleTextBackgroundChange, true, 'qctbc-')
    }, 1000)
  }, [])

  const [ textSize, setTextSize ] = useState<string | number>('TS_S')
  const handleTextSize = (textSize: string | number) => {
    setTextSize(textSize)

    setComponentSetting(editor, QUOTE_TEXT_SIZE[textSize])
  }

  const [ quoteBackground, setQuoteBackground ] = useState<string>("#FFFFFF")
  const handleQuoteBackground = ( hex: string ) => {
    setQuoteBackground(hex)

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_QUOTE_ITEM}`]: {'background-color' : hex}})
  }

  const [ quotePadding, setQuotePadding ] = useState<string | number>('QPNone')
  const handleQuotePadding = (quotePadding: string | number) => {
    setQuotePadding(quotePadding)

    setComponentSetting(editor, QUOTE_PADDING[quotePadding])
  }

  const [ style, setStyle ] = useState<string | number>('SImageIndentRight')
  const handleStyle = (style: string | number) => {
    setStyle(style)

    setComponentSetting(editor, QUOTE_AUTHOR_STYLE[style])
  }

  const [ imageSize, setImageSize ] = useState<string | number>('IS_S')
  const handleImageSize = (imageSize: string | number) => {
    setImageSize(imageSize)

    setComponentSetting(editor, QUOTE_AUTHOR_IMAGE_SIZE[imageSize])
  }

  const [ imageShape, setImageShape ] = useState<string | number>('ISRect')
  const handleImageShape = (imageShape: string | number) => {
    setImageShape(imageShape)

    setComponentSetting(editor, QUOTE_AUTHOR_IMAGE_SHAPE[imageShape])
  }

  const [ authorTextSize, setAuthorTextSize ] = useState<string | number>('ATS_S')
  const handleAuthorTextSize = (authorTextSize: string | number) => {
    setAuthorTextSize(authorTextSize)

    setComponentSetting(editor, QUOTE_AUTHOR_TEXT_SIZE[authorTextSize])
  }

  const [ quoteContainerPadding, setQuoteContainerPadding ] = useState<string | number>('PNone')
  const handleQuoteContainerPadding = (quoteContainerPadding: string | number) => {
    setQuoteContainerPadding(quoteContainerPadding)

    setComponentSetting(editor, QUOTE_COTAINER_PADDING[quoteContainerPadding])
  }

  const [ backgroundColor, setBackgroundColor ] = useState<string>('#FFF')
  const handleBackgroundColor = ( hex: string ) => {
    setBackgroundColor(hex)

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {'background-color' : hex}})
  }

  const handleRemoveBackgroundColor = ( ) => {
    setTextBackgroundColor("#fff")
  }
  const [ textBackgroundColor, setTextBackgroundColor ] = useState<string>('#FFFFFF')
  const handleTextBackgroundChange = ( hex: string ) => {
    setTextBackgroundColor(hex)

    setComponentSetting(editor, {[`.${CT_MAIN_COMPONENT} .${CT_QUOTE_TEXT} span`]: {'background-color' : hex}})
  }

  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
    const allAttributes = mainComponent?.getAttributes()

    mainComponent?.setAttributes({...allAttributes, [attrKey]: [ textSize, `qbc-${quoteBackground}`, quotePadding, style, imageSize, imageShape, authorTextSize, quoteContainerPadding, `qcbc-${backgroundColor}`, `qctbc-${textBackgroundColor}` ].join(' ')})
  }, [ textSize, quoteBackground, quotePadding, style, imageSize, imageShape, authorTextSize, quoteContainerPadding, backgroundColor, textBackgroundColor])

  const TextSizeOptions = [
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'TS_S',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'TS_M',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'TS_L',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const QuotePaddingOptions = [
    {
      label: <ItemTextDiv>-</ItemTextDiv>, 
      value: 'QPNone',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'QP_S',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'QP_M',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'QP_L',
      className: 'w-1/4 py-1.5', 
    },
  ]

  const StyleOptions = [
    {
      label: <ImageIndentRightIcon className="m-auto" />, 
      value: 'SImageIndentRight',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ImageIndentLeftIcon className="m-auto" />, 
      value: 'SImageIndentLeft',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <AlignLeftIcon className="m-auto" />, 
      value: 'SAlignLeft',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const ImageSizeOptions = [
    {
      label: <PanelHeaderDiv>S</PanelHeaderDiv>, 
      value: 'IS_S',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <PanelHeaderDiv>M</PanelHeaderDiv>, 
      value: 'IS_M',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const ImageShapeOptions = [
    {
      label: <ShapeRectIcon className="m-auto" />, 
      value: 'ISRect',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <ShapeCircleIcon className="m-auto" />, 
      value: 'ISCircle',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const AuthorTextSizeOptions = [
    {
      label: <PanelHeaderDiv>S</PanelHeaderDiv>, 
      value: 'ATS_S',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <PanelHeaderDiv>M</PanelHeaderDiv>, 
      value: 'ATS_M',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const QuoteContainerPaddingOptions = [
    {
      label: <PanelHeaderDiv>-</PanelHeaderDiv>, 
      value: 'PNone',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <PanelHeaderDiv>S</PanelHeaderDiv>, 
      value: 'P_S',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <PanelHeaderDiv>M</PanelHeaderDiv>, 
      value: 'P_M',
      className: 'w-1/2 py-1.5', 
    }, 
    {
      label: <PanelHeaderDiv>L</PanelHeaderDiv>, 
      value: 'P_L',
      className: 'w-1/2 py-1.5', 
    }, 
  ]

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>Quotes</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Quote</ItemHeaderDiv>
                    <div className={`border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] relative py-4 px-4`}>
                      
                      <ItemHeaderDiv className={`mb-2`} >Text size</ItemHeaderDiv>
                      <Segmented options={TextSizeOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleTextSize} value={textSize} ></Segmented>
                      
                      <div className="flex my-4 justify-between">
                        <ItemHeaderDiv className={`flex items-center`}>Background</ItemHeaderDiv>
                        <ColorPicker 
                          onChange={(value: Color, hex: string) => handleQuoteBackground(hex)} 
                          value={quoteBackground} />
                      </div>

                      <ItemHeaderDiv className={`mb-2`} >Padding</ItemHeaderDiv>
                      <Segmented options={QuotePaddingOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleQuotePadding} value={quotePadding} ></Segmented>

                    </div>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Author</ItemHeaderDiv>
                    <div className={`border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] relative py-4 px-4 grid grid-cols-1 gap-y-3`}>

                      <div>
                        <ItemHeaderDiv className={`mb-2`} >Style</ItemHeaderDiv>
                        <Segmented options={StyleOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleStyle} value={style} ></Segmented>
                      </div>

                      <div>
                        <ItemHeaderDiv className={`mb-2`} >Image size</ItemHeaderDiv>
                        <Segmented options={ImageSizeOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleImageSize} value={imageSize} ></Segmented>
                      </div>

                      <div>
                        <ItemHeaderDiv className={`mb-2`} >Image shape</ItemHeaderDiv>
                        <Segmented options={ImageShapeOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleImageShape} value={imageShape} ></Segmented>
                      </div>

                      <div>
                        <ItemHeaderDiv className={`mb-2`} >Text size</ItemHeaderDiv>
                        <Segmented options={AuthorTextSizeOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleAuthorTextSize} value={authorTextSize} ></Segmented>
                      </div>


                    </div>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Quote container</ItemHeaderDiv>
                    <div className={`border-solid border-[1px] border-[#EDEFF1] rounded-md bg-[#f9fbfc] relative py-4 px-4`}>
                      
                    <div className="flex justify-between">
                      <ItemHeaderDiv className={`flex items-center`}>Background</ItemHeaderDiv>
                      
                      <ColorPicker 
                          onChange={(value: Color, hex: string) => handleBackgroundColor(hex)} 
                          value={backgroundColor}
                          size="large" />
                    </div>

                    <div className="flex my-2 items-center justify-between">
                      <ItemHeaderDiv className="inline-block !mr-auto" >Text Background Color</ItemHeaderDiv> 
                      <Button
                          type='text'
                          icon={<XIcon />}
                          className={`text-center flex pl-1 mx-auto items-center justify-center`}
                          onClick={() => handleRemoveBackgroundColor()}
                      />
                      <ColorPicker 
                          onChange={(value: Color, hex: string) => handleTextBackgroundChange(hex)} 
                          value={textBackgroundColor}
                          size="large" />
                    </div>

                    <ItemHeaderDiv className={`my-2`} >Padding</ItemHeaderDiv>
                    <Segmented options={QuoteContainerPaddingOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleQuoteContainerPadding} value={quoteContainerPadding} ></Segmented>
                      

                    </div>
                  </div>


                </div>
    }
  ]

  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    />
  )
}

function SPListSettings() {

  const { editor } = useSelector((store: any) => store.pageBuilder)
  const [ attrKey, setAttrKey ] = useState<string>('quotelist')

  useEffect(() => {
    setInitPanelSetting(editor, attrKey, Object.keys(QUOTE_LIST_COLUMNS), handleColumns)
    setInitPanelSetting(editor, attrKey, Object.keys(QUOTE_LIST_GAPS), handleGaps)
  }, [])

  const [ columns, setColumns ] = useState<string | number>('C_1')
  const handleColumns = (columns: string | number) => {
    setColumns(columns)

    setComponentSetting(editor,QUOTE_LIST_COLUMNS[columns])
  }

  const [ gaps, setGaps ] = useState<string | number>('GNone')
  const handleGaps = (gaps: string | number) => {
    setGaps(gaps)

    setComponentSetting(editor, QUOTE_LIST_GAPS[gaps])
  }

  useEffect(() => {
    const editorComponent = editor.getWrapper()
    const mainComponent = editorComponent?.find(`.${CT_MAIN_COMPONENT}`)[0]
    const allAttributes = mainComponent?.getAttributes()

    mainComponent?.setAttributes({...allAttributes, [attrKey]: [ columns, gaps ].join(' ')})
  }, [columns, gaps])



  const ColumnsOptions = [
    {
      label: <ItemTextDiv>1</ItemTextDiv>, 
      value: 'C_1',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>2</ItemTextDiv>, 
      value: 'C_2',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>3</ItemTextDiv>, 
      value: 'C_3',
      className: 'w-1/4 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>4</ItemTextDiv>, 
      value: 'C_4',
      className: 'w-1/4 py-1.5', 
    }, 
  ]

  const GapsOptions = [
    {
      label: <ItemTextDiv>-</ItemTextDiv>, 
      value: 'GNone',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>S</ItemTextDiv>, 
      value: 'G_S',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>M</ItemTextDiv>, 
      value: 'G_M',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>L</ItemTextDiv>, 
      value: 'G_L',
      className: 'w-1/5 py-1.5', 
    }, 
    {
      label: <ItemTextDiv>XL</ItemTextDiv>, 
      value: 'G_XL',
      className: 'w-1/5 py-1.5', 
    }, 
  ]


  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <PanelHeaderDiv>List settings</PanelHeaderDiv>, 
      children: <div className="pb-8 grid grid-cols-1 gap-y-3">

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Columns</ItemHeaderDiv>
                    <Segmented options={ColumnsOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleColumns} value={columns} ></Segmented>
                  </div>

                  <div>
                    <ItemHeaderDiv className={`mb-2`} >Gaps</ItemHeaderDiv>
                    <Segmented options={GapsOptions} className={`!bg-[#EDECEA] px-[4px] w-full py-[4px]`} onChange={handleGaps} value={gaps} ></Segmented>
                  </div>


                </div>
    }
  ]

  return (
    <Collapse 
      items={items} 
      defaultActiveKey={[]}
      expandIconPosition="end"
      className="bld-setting-panel big-panel-full"
    />
  )
}


const PanelHeaderDiv = styled.div`
  font-size: 16px;
  font-weight: 600;
`

const ItemHeaderDiv = styled.div`
  font-size: 14px;
  font-weight: 600;
`

const ItemTextDiv = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: black;
`

const ItemTextDiv14 = styled.div`
  font-size: 16px;
  font-weight: bold;
`

const PanelDiv44 = styled.div`
  border: 1px solid #EDEFF1;
  border-radius: 6px;
  background-color: #f9fbfc;
  min-width: 44px;
  min-height: 44px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`

export {
    SPText, 
    SPSectionHeader, 
    SPSelectionColor, 
    SPBackground, 
    SPSectionSizeAndPaddings, 
    SPMinHeight, 
    SPImage, 
    SPGallery, 
    SPVideoSection, 
    SPList, 
    SPListItem, 
    SPMap, 
    SPJobs, 
    SPJobGroups, 
    SPJobCardLayout, 
    SPJobFilters, 
    SPJobTabs, 
    SPQuotes, 
    SPListSettings, 
}








/////////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////////////////////////////// 


function getCarouselCSS (id_class: string) {
  
  return `.carousel {
    height: 100%;
  }
  .carousel ul.slides {
      display: block;
      position: relative;
      height: 300px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      list-style: none;
    }
    
    .carousel .slides * {
      user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }
    
    .carousel ul.slides input {
      display: none;
    }
    
    .carousel .slide-container {
      display: block;
    }
    
    .carousel .slide-image {
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      opacity: 0;
      transition: all 0.7s ease-in-out;
    }
    
    .carousel .slide-image img {
      width: auto;
      min-width: 100%;
      height: 100%;
    }
    
    .carousel .carousel-controls {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
      font-size: 100px;
      line-height: 300px;
      color: #fff;
    }
    
    .carousel .carousel-controls label {
      display: none;
      position: absolute;
      padding: 0 20px;
      opacity: 0;
      transition: opacity 0.2s;
      cursor: pointer;
    }
    
    .carousel .slide-image:hover + .carousel-controls label {
      opacity: 0.5;
    }
    
    .carousel .carousel-controls label:hover {
      opacity: 1;
    }
    
    .carousel .carousel-controls .prev-slide {
      width: 49%;
      text-align: left;
      left: 0;
    }
    
    .carousel .carousel-controls .next-slide {
      width: 49%;
      text-align: right;
      right: 0;
    }
    
    .carousel input:checked + .slide-container .slide-image {
      opacity: 1;
      transform: scale(1);
      transition: opacity 1s ease-in-out;
    }
    
    .carousel input:checked + .slide-container .carousel-controls label {
      display: block;
    }
    
    .carousel input:checked + .slide-container .nav label {
      display: block;
    }`
}


function getCarouselHTML(imageComponents: Component[]) {

  const componentCounts = imageComponents.length
  const getIndex = (index: number, direct: number) => {
    if(index + direct < 0) return  componentCounts
    else if(index + direct >= componentCounts) return 1
    else return index + direct + 1
  }

  return `<div class="carousel">
            <ul class="slides">
              <input type="radio" name="radio-buttons" id="img-1" checked />
              ${imageComponents.map((component: Component, index: number) => {
                const el = component?.getEl() as HTMLImageElement

                return `<li class="slide-container">
                          <div class="slide-image">
                            <img class="${CT_IMAGE}" src="${el.src}" height="100%" width="auto">
                          </div>
                          <div class="carousel-controls">
                            <label for="img-${getIndex(index, -1)}" class="prev-slide">
                              <span>&lsaquo;</span>
                            </label>
                            <label for="img-${getIndex(index, 1)}" class="next-slide">
                              <span>&rsaquo;</span>
                            </label>
                          </div>
                        </li>
                        <input type="radio" name="radio-buttons" id="img-${getIndex(index, 1)}" />`
              })}
              
            </ul>
          </div>`
}


function getJobJavascript() {

  return `$(document).ready(function(){
      $("select").on("change", function(e){
        var filterValue = this.value;
        console.log(this.attr('key'))
        var filterItems = $(".${CT_MAIN_COMPONENT} .${CT_JOB_FILTER_ITEM}")

        filterItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
      })
    })`

}

function getJobTable( jobArr: CommonObject[], tableShowColumn: CommonObject, showTableButton: boolean ) {
  return (`
        <tr class="job-page-border-t">
          ${
            Object.keys(tableShowColumn).map((key: string) => {
              return tableShowColumn[key] ? `<th class="col" key="${key}" >${JOB_TALBE_COLUMNS[key]}</th>` : ''
            }).join("")
          }
          ${showTableButton ? `<th class=""></th>` : "" }
            
        </tr>
        ${
          jobArr.map((job: CommonObject) => {
            let filterItem: [] = []
            const strTDs = Object.keys(tableShowColumn).map((key: string) => {
              filterItem.push(`${key}="${job[key]}"`)
              return tableShowColumn[key] ? `<td class="col">${job[key]}</td>`: ""
            }).join("")

            return `<tr class="${CT_JOB_FILTER_ITEM} job-page-border-t" ${filterItem.join(" ")} >${strTDs}${showTableButton ? `<td class=""><button class="btn btn-dark">Read more</button></td>` : ''}</tr>`
          }).join("")
        }
        
  `)
}

function getJobCard( jobArr: CommonObject ) {
  return jobArr.map((job: CommonObject) => {
    let filterItem: [] = []

    Object.keys(JOB_TALBE_COLUMNS).map((key: string) => {
        filterItem.push(`${key}="${job[key]}"`)
    })

    return `<div class="${CT_JOB_CARD} ${CT_JOB_FILTER_ITEM}" ${filterItem.join(" ")}>
              <div>
                  <h5 class="${CT_JOB_CARD_HEADER} mt-1">${job['job_title']}</h5>
                  <p>${job['category']}</p>
              </div>
              <button type="button" class="btn btn-dark ms-auto">Read more</button>
            </div>`
  }).join("")

}

function getJobFilter(jobArr: CommonObject, showColumns: CommonObject, showHeader: boolean) {
  const arrGroups = Object.keys(JOB_TALBE_COLUMNS).reduce((obj: CommonObject, key: string) => {
    obj[key] = _.groupBy(jobArr, key)
    return obj
  }, {})

  return (
    `${showHeader ? `<div class="">Filter</div>`: `` }
    <div class="${CT_JOB_FILTER}">
      ${showColumns['searchInput'] ? `<input class="job-page-list-item active search-text col" type="search" placeholder="Search text" key="searchInput">`: '' }
      ${
          Object.keys(JOB_TALBE_COLUMNS).map((key: string) => {

            if(showColumns[key]) {
              let searchSelect = `<select class="job-page-list-item col" key="${key}"><option>All ${JOB_TALBE_COLUMNS[key]}</option>`
  
              searchSelect += Object.keys(arrGroups[key]).map((valueKey: string) => {
                return `<option key="${valueKey}">${valueKey}</option>`
              }).join("")
              searchSelect += "</select>"
  
              return searchSelect
            }

          }).join("")
      }
    </div>`
  )
}