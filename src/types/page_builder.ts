import { LanguageType } from './global';

export interface PageInfo {
    pageName: string
    language: LanguageType
}

export interface PageType {
    id          : string 
    styles      : string 
    component   : string 
    type        : string 
}

export interface CommonObject {
    [key: string | number] : any
}

export interface HistoryObject {
    step            : number
    sectionIndex    : number
    preSectionIndex ?: number
    sectionData     ?: PageType
    actionType      : string
}

export interface saveStackObject {
    date: string, 
    undoStacks?: HistoryObject[], 
    sections?: PageType[], 
    pageInfo: PageInfo, 
}


export interface TemplateResponse {
    userId?: number, 
    companyId?: number, 
    templateId?: number, 
    templateName?: string, 
    templateContent?: saveStackObject, 
    publishStatus?: number, 
    defaultStatus?: number, 
}