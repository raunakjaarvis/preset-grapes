export const GOOGLE_MAP_API_KEY     = "AIzaSyAGJMbSoPHaqAkI-XgGsSlGA27OH6eF8Z8"
export const YOUTUBE_ORIGIN_URL     = "localhost:3000"

export const BOOTSTRAP_CSS = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">`
export const BOOTSTRAP_JS = `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>`
export const JQUERY_JS = `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>`


// HT = History Type 
export const HT_SECTION_CREATE      = "history_section_create"
export const HT_SECTION_REMOVE      = "history_section_remove"
export const HT_SECTION_MOVE        = "history_section_move"
export const HT_SECTION_DUPLICATE   = "history_section_duplicate"
export const HT_SECTION_COPY        = "history_section_copy"
export const HT_SECTION_PASTE       = "history_section_paste"
export const HT_SECTION_EDIT        = "history_section_edit"
export const HT_SECTION_DONE        = "history_section_done"
export const HT_SECTION_EDITING     = "history_section_editing"

// TT = TemplateText
export const TT_TEXT                = "Text"
export const TT_IMAGE               = "Image"
export const TT_GALLERY             = "Gallery"
export const TT_VIDEO               = "Video"
export const TT_LIST                = "List"
export const TT_MAP                 = "Map"
export const TT_JOBS                = "Job"
export const TT_QUOTES              = "Qquote"
export const TT_COOKIES             = "Cookie"


// CT = ComponentType
export const CT_MAIN_COMPONENT      = "type_main_component"
export const CT_CONTENT_COMPONENT   = "type_content_component"
export const CT_HEADER_COMPONENT    = "type_header_component"

export const CT_HEADER_CONTAINER    = "type_header_container"
export const CT_TEXT_CONTAINER      = "type_text_container"
export const CT_CONTENT_CONTAINER   = "type_content_container"
export const CT_IMAGE_CONTAINER     = "type_container_image"
export const CT_VIDEO_CONTAINER     = "type_container_video"
export const CT_POSTER_CONTAINER    = "type_container_poster"
export const CT_IFRAME              = "type_iframe"
export const CT_MAP_CONTAINER       = 'type_container_map'

export const CT_JOB_TAB_COTNAINER   = "type_container_job_tab"
export const CT_JOB_TAB_CONTENT     = "type_content_job_tab"
export const CT_JOB_F_G_CONTAINER   = "type_container_job_f_g"
export const CT_JOB_FILTER_CONTAINER= "type_container_job_filter"
export const CT_JOB_GROUP_CONTAINER = "type_container_job_group"

export const CT_HEADER              = "type_header"
export const CT_CONTENT             = "type_content"
export const CT_BUTTON              = "type_button"
export const CT_IMAGE               = "type_image"
export const CT_GALLERY             = "type_gallery"
export const CT_GALLERY_ITEM        = "type_gallery_item"
export const CT_GALLERY_IMG         = "type_gallery_img"
export const CT_GALLERY_CAROUSEL    = "type_gallery_carousel"
export const CT_GALLERY_CAROUSEL_CTL= "type_gallery_carousel_control"
export const CT_VIDEO               = "type_video"
export const CT_VIDEO_POSTER_IMAGE  = "type_video_poster_image"
export const CT_LIST                = "type_list"
export const CT_LIST_ITEM           = "type_list_item"
export const CT_LIST_ITEM_IMG       = "type_list_item_img"
export const CT_LIST_ITEM_HEAD      = "type_list_item_head"
export const CT_LIST_ITEM_CONTENT   = "type_list_item_content"
export const CT_MAP                 = "type_map"
export const CT_JOB                 = "type_job"
export const CT_JOB_CARD            = "type_job_card"
export const CT_JOB_CARD_HEADER     = "type_job_card_header"
export const CT_JOB_FILTER          = "type_job_filter"
export const CT_JOB_FILTER_ITEM     = "type_job_filter_item"
export const CT_JOB_GROUP           = "type_job_group"
export const CT_QUOTE               = "type_quote"
export const CT_QUOTE_TEXT          = "type_quote_text"
export const CT_QUOTE_ITEM_AUTHOR   = "type_quote_item_author"
export const CT_QUOTE_ITEM          = "type_quote_item"
export const CT_QUOTE_AUTHOR_IMG    = "type_quote_author_img"
export const CT_QUOTE_AUTHOR_TXT    = "type_quote_author_txt"
export const CT_LIST_SETTING        = "type_list_setting"
export const CT_COOKIE              = "type_cookie"


// section state
export const SECTION_STATE_NORMAL   = 1
export const SECTION_STATE_EDIT     = 2

export const ID_CLASS_PREFIX        = "id-class-"

export interface StyleObject {
    [key: string | number] : any;
}

export const JOB_TALBE_COLUMNS: StyleObject  = {
    'job_title': "Job title", 
    'category': "Category", 
    'department': "Department", 
    'county': "Country", 
    'remote_status': "Remote Status", 
    'job_status': "Job Status", 
    'created_at': "Create Date", 
}


// DI = DeviceInfo
export const DI_DEFAULT             = "device_default"
export const DI_IPHONE_SE           = "device_iPhone_SE"
export const DI_MAX_SIZE            = "device_max_size"

export const DEVICE_INFO: StyleObject = {
    [DI_DEFAULT]: {
        "class": ''
    }, 
    [DI_IPHONE_SE]: {
        "class": 'w-[calc(375px_+_2px_+_1rem)] mx-auto'
    }, 
    [DI_MAX_SIZE]: {
        "class": ''
    }
}

// =====================================================================
// =====================================================================
// =====================================================================
// Theme panel

export const CONTENT_ALIGN: StyleObject = {
    CALeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            'text-align': 'left'
        }
    }, 
    CACenter: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            'text-align': 'center'
        }
    }, 
    CARight: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            'text-align' : 'right'
        }
    }, 
}

export const TEXT_CONTAINER_WIDTH: StyleObject = {
    TCWFull: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            width: '100%'
        }
    }, 
    TCW2_3: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            width: '66.6666%'
        }
    }, 
    TCW1_2: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            width: '50%'
        }
    }, 
    TCW1_3: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            width: '33.3333%'
        }
    }, 
    TCW1_4: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            width: '25%'
        }
    }
}

export const ALIGN: StyleObject = {
    ALeft: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'display': 'flex', 
            'justify-content': 'start'
        }
    }, 
    ACenter: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'display': 'flex', 
            'justify-content': 'center'
        }
    }, 
    ARight: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'display': 'flex', 
            'justify-content': 'end'
        }
    }
}

export const INNER_PADDING: StyleObject = {
    IPS: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            padding: '0.25rem'
        }
    }, 
    IPM: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            padding: '1rem'
        }
    }, 
    IPL: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            padding: '1.5rem'
        }
    }, 
    IPXL: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            padding: '3rem'
        }
    }
}

// =====================================================================
// =====================================================================
// =====================================================================
// SectionHeader panel
export const SECTION_HEADER_ALIGN: StyleObject = {
    HAAlign: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'display': 'flex', 
            'flex-direction': 'column', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'order': '0'
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            'order': '1'
        }
    }, 
    HALeft: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'display': 'flex', 
            'flex-direction': 'row', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'order': '0'
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            'order': '1'
        }
    }, 
    HARight: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'display': 'flex', 
            'flex-direction': 'row', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'order': '1'
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_COMPONENT}`]: {
            'order': '0'
        }
    }
}

export const SECTION_HEADER_CONTENT_ALIGN: StyleObject = {
    CALeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'text-align': 'left'
        }
    }, 
    CACenter: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'text-align': 'center'
        }
    }, 
    CARight: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'text-align': 'right'
        }
    }
}

export const SECTION_HEADER_WIDTH: StyleObject = {
    HWFull: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'width': '100%'
        }
    }, 
    HW2_3: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'width': '66.6666%'
        }
    }, 
    HW1_2: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'width': '50%'
        }
    }, 
    HW1_3: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'width': '33.3333%'
        }
    }, 
    HW1_4: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'width': '25%'
        }
    }, 
}

export const SECTION_HEADER_SPACING: StyleObject = {
    SNone: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'gap': 'unset'
        }
    }, 
    SS: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'gap': '0.5rem'
        }
    }, 
    SM: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'gap': '1rem'
        }
    }, 
    SL: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'gap': '2rem'
        }
    }, 
    SML: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {
            'gap': '3rem'
        }
    }, 
}

export const SECTION_HEADER_CONTENT_BOUNDARY: StyleObject = {
    CBFullScreen: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {

        }
    }, 
    CBInset: {
        [`.${CT_MAIN_COMPONENT} .${CT_HEADER_COMPONENT}`]: {

        }
    }
}

// =====================================================================
// =====================================================================
// =====================================================================
// Section size and padding Panel

export const SECTION_TOP_PADDING: StyleObject = {
    mtNone: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'padding-top': 'unset !important'
        }
    }, 
    mt_s: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'padding-top': '0.5rem'
        }
    }, 
    mt_m: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'padding-top': '1rem'
        }
    }, 
    mt_l: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'padding-top': '2rem'
        }
    }
}

export const SECTION_BOTTOM_PADDING: StyleObject = {
    mbNone: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'padding-bottom': 'unset !important'
        }
    }, 
    mb_s: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'padding-bottom': '0.5rem'
        }
    }, 
    mb_m: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'padding-bottom': '1rem'
        }
    }, 
    mb_l: {
        [`.${CT_MAIN_COMPONENT}`]: {
            'padding-bottom': '2rem'
        }
    }
}

// =====================================================================
// =====================================================================
// =====================================================================
// Minimum Height Panel

export const HEIGHT: StyleObject = {
    H_S: {
        'min-height': '100px'
    }, 
    H_M: {
        'min-height': '200px'
    }, 
    H_L: {
        'min-height': '300px'
    }, 
    H_XL: {
        'min-height': '500px'
    }
}

export const VERTICAL_ALIGN: StyleObject = {
    VATop: {
        'vertical-align': 'top'
    }, 
    VACenter: {
        'vertical-align': 'middle'
    }, 
    VABottom: {
        'vertical-align': 'bottom'
    }, 
}

// Image panel
export const GALLERY_ALIGN: StyleObject = {
    ALeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_IMAGE_CONTAINER}`]: {
            'display': 'flex', 
            'justify-content': 'start'
        }
    }, 
    ACenter: {
        [`.${CT_MAIN_COMPONENT} .${CT_IMAGE_CONTAINER}`]: {
            'display': 'flex', 
            'justify-content': 'center'
        }
    }, 
    ARight: {
        [`.${CT_MAIN_COMPONENT} .${CT_IMAGE_CONTAINER}`]: {
            'display': 'flex', 
            'justify-content': 'end'
        }
    }
}


// =====================================================================
// =====================================================================
// =====================================================================
// Gallery panel

export const GALLERY_TYPE: StyleObject = {
    TGrid: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'display': 'grid'
        }
    }, 
    TCarousel: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'display': 'block', 
        }
    }, 
}

export const GALLERY_GRID_TYPE: StyleObject = {
    GTSquares: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'display': 'flex', 
            'justify-content': 'center', 
            'overflow': 'hidden', 
            'align-items': 'end', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}:nth-child(2)`] : {
            'grid-column': 'span 1 / span 1 !important', 
            'grid-row' : 'span 1 / span 1', 
            'height': '300px;'
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`] : {
            'height': '200px', 
        }
    }, 
    GTMasonry: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'display': 'grid', 
            'grid-auto-rows': '200px', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}:nth-child(3n + 2)`] : {
            'grid-column': 'span 2 / span 2 !important', 
            'grid-row' : 'span 2 / span 2', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`] : {
            'width': '100%', 
            'height': '100%', 
        }
    }, 
    GTBasic: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'display': 'grid', 
            'grid-auto-rows': '200px', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}:nth-child(3n + 2)`] : {
            'grid-column': 'span 1 / span 1 !important', 
            'grid-row' : 'span 1 / span 1', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`] : {
            'width': '100%', 
            'height': 'auto', 
        }
    }
}

export const GALLERY_COLUMNS: StyleObject = {
    C_1: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'grid-template-columns': 'repeat(1, minmax(0, 1fr))', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`] : {
            'flex-basis': '100%', 
        }
    }, 
    C_2: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'grid-template-columns': 'repeat(2, minmax(0, 1fr))',
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`] : {
            'flex-basis': 'calc(100% / 2 - 1rem)', 
        }
    }, 
    C_3: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'grid-template-columns': 'repeat(3, minmax(0, 1fr))', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`] : {
            'flex-basis': 'calc(100% / 3 - 1rem)', 
        }
    }, 
    C_4: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'grid-template-columns': 'repeat(4, minmax(0, 1fr))', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY} .${CT_GALLERY_ITEM}`] : {
            'flex-basis': 'calc(100% / 4 - 1rem)', 
        }
    }
}

export const GALLERY_LAST_ITEM_ALIGN: StyleObject = {
    LIALeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'justify-content': 'start', 
        }
    }, 
    LIACenter: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'justify-content': 'center', 
        }
    }, 
    LIARight: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'justify-content': 'end', 
        }
    }
}

export const GALLERY_GAPS: StyleObject = {
    GNone: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'gap': '0rem'
        }
    }, 
    GS: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'gap': '0.5rem'
        }
    }, 
    GM: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'gap': '1rem'
        }
    }, 
    GL: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'gap': '2rem'
        }
    }, 
    GXL: {
        [`.${CT_MAIN_COMPONENT} .${CT_GALLERY}`] : {
            'gap': '3rem'
        }
    }
}



// =====================================================================
// =====================================================================
// =====================================================================
// List panel

export const LIST_COLUMNS: StyleObject = {
    LC_1: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'display': 'grid', 
            'grid-template-columns': 'repeat(1, minmax(0, 1fr))'
        }
    }, 
    LC_2: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'display': 'grid', 
            'grid-template-columns': 'repeat(2, minmax(0, 1fr))'
        }
    }, 
    LC_3: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'display': 'grid', 
            'grid-template-columns': 'repeat(3, minmax(0, 1fr))'
        }
    }, 
    LC_4: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'display': 'grid', 
            'grid-template-columns': 'repeat(4, minmax(0, 1fr))'
        }
    }
}

export const LIST_GAPS: StyleObject = {
    LGNone: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'gap': '0rem'
        }
    }, 
    LGS: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'gap': '0.5rem'
        }
    }, 
    LGM: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'gap': '1rem'
        }
    }, 
    LGL: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'gap': '2rem'
        }
    }, 
    LGML: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'gap': '3rem'
        }
    }
}

export const LIST_ITEM_ROW_ALIGNMENT: StyleObject = {
    RATop: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'align-items': 'start'
        }
    }, 
    RACenter: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'align-items': 'center'
        }
    }, 
    RABottom: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'align-items': 'end'
        }
    }, 
    RASpacing: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'align-items': 'stretch'
        }
    }, 
}

export const LIST_LAST_ITEM_ALIGN: StyleObject = {
    LIALeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'align-self': 'start', 
            'justify-content': 'start', 
        }
    }, 
    LIACenter: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'align-self': 'center', 
            'justify-content': 'center', 
        }
    }, 
    LIARight: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST}`] : {
            'align-self': 'end', 
            'justify-content': 'end', 
        }
    }
}


export const LIST_ITEM_LAYOUT: StyleObject = {
    LCenter: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST} .${CT_LIST_ITEM}`] : {
            'display': 'block'
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_LIST} .${CT_LIST_ITEM} .${CT_LIST_ITEM_IMG}`] : {
            'display': 'unset'
        }
    }, 
    LLeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST} .${CT_LIST_ITEM}`] : {
            'display': 'flex', 
            'gap': '1rem', 
            'align-items': 'center'
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_LIST} .${CT_LIST_ITEM} .${CT_LIST_ITEM_IMG}`] : {
            'order': '0', 
            'display': 'unset'
        }
    }, 
    LRight: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST} .${CT_LIST_ITEM}`] : {
            'display': 'flex', 
            'gap': '1rem', 
            'align-items': 'center'
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_LIST} .${CT_LIST_ITEM} .${CT_LIST_ITEM_IMG}`] : {
            'order': '1', 
            'display': 'unset'
        }
    }, 
    LSpacing: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST} .${CT_LIST_ITEM}`] : {
            'display': 'block'
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_LIST} .${CT_LIST_ITEM} .${CT_LIST_ITEM_IMG}`] : {
            'display': 'none'
        }
    }
}

// =====================================================================
// =====================================================================
// =====================================================================
// Map panel

export const MAP_WIDTH: StyleObject = {
    MWFull: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP}`] : {
            width: '100%'
        }
    }, 
    MW2_3: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP}`] : {
            width: '66.6666%'
        }
    }, 
    MW1_2: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP}`] : {
            width: '50%'
        }
    }, 
    MW1_3: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP}`] : {
            width: '33.3333%'
        }
    }, 
}

export const MAP_ALIGN: StyleObject = {
    MALeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP_CONTAINER}`] : {
            'align-items': 'start', 
            'display': 'flex'
        }
    }, 
    MACenter: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP_CONTAINER}`] : {
            'align-items': 'center', 
            'display': 'flex'
        }
    }, 
    MARight: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP_CONTAINER}`] : {
            'align-items': 'end', 
            'display': 'flex'
        }
    }, 
}

export const MAP_HEIGHT: StyleObject = {
    MH_S: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP}`] : {
            'height': '100px'
        }
    }, 
    MH_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP}`] : {
            'height': '200px'
        }
    }, 
    MH_L: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP}`] : {
            'height': '300px'
        }
    }, 
    MH_XL: {
        [`.${CT_MAIN_COMPONENT} .${CT_MAP}`] : {
            'height': '500px'
        }
    }
}

// =====================================================================
// =====================================================================
// =====================================================================
// Job template panels

export const JOB_DISPLAY_AS: StyleObject = {
    DACards: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB}>div`]: {
            'display': 'grid !important'
        }
    }, 
    DATable: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB}.show`]: {
            'display': 'flex !important'
        }
    }
}

export const JOB_TABLE_SPACING: StyleObject = {
    TS_S: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB} table`]: {
            "border-spacing": "0.25rem"
        }
    }, 
    TS_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB} table`]: {
            "border-spacing": "0.5rem"
        }
    }
}



export const JOB_CARD_TITLE_SIZE: StyleObject = {
    JTS_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_CARD_HEADER}`]: {
            'font-size': '1rem', 
        }
    }, 
    JTS_L: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_CARD_HEADER}`]: {
            'font-size': '1.25rem', 
        }
    }
}

export const JOB_CARD_INNER_PADDING: StyleObject = {
    JIP_S: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_CARD}`]: {
            'padding': '0.5rem'
        }
    }, 
    JIP_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_CARD}`]: {
            'padding': '1rem'
        }
    }, 
    JIP_L: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_CARD}`]: {
            'padding': '1.5rem'
        }
    }, 
    JIP_XL: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_CARD}`]: {
            'padding': '2rem'
        }
    }
}

export const JOB_FILTER_POSITION: StyleObject = {
    PAlign: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_TAB_CONTENT}`]: {
            "display": "block"
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_F_G_CONTAINER}`]: {
            "display": "flex", 
            "width": "100%"
        },
        [`.${CT_MAIN_COMPONENT} .${CT_JOB}`]: {
            "width": "100%"
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_FILTER}`]: {
            "display": "flex", 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_FILTER_CONTAINER}`]: {
            "width": "100%"
        }
    }, 
    PLeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_TAB_CONTENT}`]: {
            "display": "flex"
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_F_G_CONTAINER}`]: {
            "display": "block", 
            "width": "auto"
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_JOB}`]: {
            "width": "100%"
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_FILTER}`]: {
            "display": "block", 
            "width": "100%"
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_FILTER_CONTAINER}`]: {
            "width": "100%"
        }
    }
}

export const JOB_TAB_POSITION: StyleObject = {
    JTPTop: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_CONTAINER}`]: {
            'display': 'block'
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_CONTAINER} .nav-tabs`]: {
            'border-width': '1px', 
            'flex-direction': 'row', 
            'text-align': 'center', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_TAB_COTNAINER} button`]: {
            'border-radius': 'unset'
        },
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_TAB_COTNAINER} button.active`]: {
            'border-left': 'unset', 
            'border-bottom': '1px solid'
        }
    }, 
    JTPLeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_CONTAINER}`]: {
            'display': 'flex'
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_CONTENT_CONTAINER} .nav-tabs`]: {
            'border-width': '0px', 
            'flex-direction': 'column', 
            'text-align': 'center', 
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_TAB_COTNAINER} button`]: {
            'border-radius': 'unset'
        },
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_TAB_COTNAINER} button.active`]: {
            'border-bottom': 'unset', 
            'border-left': '2px solid'
        }
    }
}

export const JOB_TAB_TEXT_SIZE: StyleObject = {
    JTTS_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_TAB_COTNAINER} button`]: {
            'font-size': '1rem'
        }
    }, 
    JTTS_L: {
        [`.${CT_MAIN_COMPONENT} .${CT_JOB_TAB_COTNAINER} button`]: {
            'font-size': '1.5rem'
        }
    }
}


// =====================================================================
// =====================================================================
// =====================================================================
// Quote panel
export const QUOTE_TEXT_SIZE: StyleObject = {
    TS_S: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_TEXT}`]: {
            'font-size': '0.8rem'
        }
    }, 
    TS_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_TEXT}`]: {
            'font-size': '1rem'
        }
    }, 
    TS_L: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_TEXT}`]: {
            'font-size': '1.3rem'
        }
    }
}

export const QUOTE_PADDING: StyleObject = {
    QPNone: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_ITEM}`]: {
            padding: '0rem'
        }
    }, 
    QP_S: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_ITEM}`]: {
            padding: '0.25rem'
        }
    }, 
    QP_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_ITEM}`]: {
            padding: '1rem'
        }
    }, 
    QP_L: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_ITEM}`]: {
            padding: '1.5rem'
        }
    }
}
// Author
export const QUOTE_AUTHOR_STYLE: StyleObject = {
    SImageIndentLeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_IMG}`]: {
            "order": "0", 
            "display": "block"
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_TXT}`]: {
            "order": "1"
        }
    }, 
    SImageIndentRight: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_IMG}`]: {
            "order": "1", 
            "display": "block"
        }, 
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_TXT}`]: {
            "order": "0"
        }
    }, 
    SAlignLeft: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_IMG}`]: {
            "display": "none"
        }, 
    }
}

export const QUOTE_AUTHOR_IMAGE_SIZE: StyleObject = {
    IS_S: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_IMG}`]: {
            'width': '60px', 
            'height': '60px'
        }
    }, 
    IS_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_IMG}`]: {
            'width': '100px', 
            'height': '100px'
        }
    }
}

export const QUOTE_AUTHOR_IMAGE_SHAPE: StyleObject = {
    ISRect: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_IMG}`]: {
            'border-radius': '6px', 
        }
    }, 
    ISCircle: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_IMG}`]: {
            'border-radius': '100%', 
        }
    }
}

export const QUOTE_AUTHOR_TEXT_SIZE: StyleObject = {
    ATS_S: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_TXT}`]: {
            'font-size': '14px', 
        }
    }, 
    ATS_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_QUOTE_AUTHOR_TXT}`]: {
            'font-size': '16px', 
        }
    }
}

export const QUOTE_COTAINER_PADDING: StyleObject = {
    PNone: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'padding': 'unset'
        }
    }, 
    P_S: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'padding': '0.5rem'
        }
    }, 
    P_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'padding': '1rem'
        }
    }, 
    P_L: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'padding': '2rem'
        }
    }, 
}

// Quote List panel
export const QUOTE_LIST_COLUMNS: StyleObject = {
    C_1: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'display': 'grid', 
            'grid-template-columns': 'repeat(1, minmax(0, 1fr))'
        }
    }, 
    C_2: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'display': 'grid', 
            'grid-template-columns': 'repeat(2, minmax(0, 1fr))'
        }
    }, 
    C_3: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'display': 'grid', 
            'grid-template-columns': 'repeat(3, minmax(0, 1fr))'
        }
    }, 
    C_4: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'display': 'grid', 
            'grid-template-columns': 'repeat(4, minmax(0, 1fr))'
        }
    }
}

export const QUOTE_LIST_GAPS: StyleObject = {
    GNone: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'gap': '0.25rem'
        }
    }, 
    G_S: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'gap': '0.5rem'
        }
    }, 
    G_M: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'gap': '1rem'
        }
    }, 
    G_L: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'gap': '2rem'
        }
    }, 
    G_XL: {
        [`.${CT_MAIN_COMPONENT} .${CT_LIST_SETTING}`]: {
            'gap': '3rem'
        }
    }
}