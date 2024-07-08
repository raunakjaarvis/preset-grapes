
import { ActionReducerMapBuilder, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { rootApi } from '../api';
import { ApiResponse, LanguageType } from '@/types/global';
import { UserProps } from '@/types/auth';

import { 
    PageInfo, 
    PageType, 
    CommonObject, 
    HistoryObject, 
    saveStackObject, 
    TemplateResponse, 
} from '@/types/page_builder'

interface PageBuilderInitialProps {
    pageInfo?: PageInfo | null, 
    sections?: PageType[], 
    newSectionIndex?: number, 
    editor?: any, 
    editState?: number, 
    selectedComponentType?: string, 
    editingSectionType?: string, 
    jobDisplayAs?: string, 
    jobTableColumnFilter?: CommonObject, 
    jobFilterColumn?: CommonObject, 
    editSectionIndex?: number, 
    copiedSectionIndex?: number, 
    doneSectionIndex?: number, 
    deviceType?: string, 
    showEditListModal?: boolean, 
    previewIndex?: number, 

    undoStacks?: HistoryObject[], 
    undoStackIndex: number, 
    actionIsHuman?: boolean, 
    savedUndoStacks?: saveStackObject[], 

    publishedTemplates: TemplateResponse[], 
    savedTemplates: TemplateResponse[], 
    currentTemplate: TemplateResponse | null,
}

const initialState: PageBuilderInitialProps = {
    pageInfo: null, 
    sections: [], 
    newSectionIndex: 0, 
    editor: null, 
    editState: 1, 
    selectedComponentType: '', 
    editingSectionType: '', 
    jobDisplayAs: '', 
    jobTableColumnFilter: {}, 
    jobFilterColumn: {}, 
    editSectionIndex: -1, 
    copiedSectionIndex: -1, 
    doneSectionIndex: -1, 
    deviceType: "device_default", 
    showEditListModal: false, 
    previewIndex: -1, 

    undoStacks: [], 
    undoStackIndex: 0, 
    actionIsHuman: true, 
    savedUndoStacks: [], 

    publishedTemplates: [], 
    savedTemplates: [], 
    currentTemplate: null,
};

export const pageBuilderApi = rootApi.injectEndpoints({
    endpoints: build => ({
        saveSection: build.mutation<ApiResponse<TemplateResponse>, TemplateResponse>({
            query: (arg: {userId: number, companyId: number, templateId: number, templateName: string, templateContent: saveStackObject, publishStatus: number, defaultStatus: number}) => ({
                url: `/test/publish/template/save`, 
                method: 'POST',
                body: {
                    templateId: arg.templateId, 
                    userId: arg.userId, 
                    companyId: arg.companyId, 
                    templateName: arg.templateName, 
                    templateContent: JSON.stringify(arg.templateContent), 
                    publishStatus: arg.publishStatus, 
                    defaultStatus: arg.defaultStatus, 
                }
            }), 
            invalidatesTags: ['PageBuilder'],
        }),
        saveUploadImage: build.mutation<ApiResponse<any>, { image: File, kind: string }>({
            async queryFn(_arg: { image: File, kind: string }, _queryApi, _extraOptions, fetchWithBQ) {
                const formData = new FormData();
        
                formData.append('kind', _arg.kind as string)
                formData.append('file', _arg.image as File)
        
                const response = await fetchWithBQ({
                    method: 'POST',
                    url: '/test/publish/template/file/upload',
                    body: formData,
                });
        
                return response;
            },
            invalidatesTags: ['PageBuilder']
        }), 
        getAllTemplateData: build.query<ApiResponse<any>, { templateId: number, userId: number, companyId: number }>({
            query: (arg: { templateId: number, userId: number, companyId: number }) => ({
                url: '/test/publish/template/list',
                method: 'GET',
                params: arg,
            }),
            providesTags: ['PageBuilder'],
        }),
        getTemplate: build.query<ApiResponse< TemplateResponse >, { templateId: number }>({
            query: (arg: { templateId: number }) => ({
                url: `/test/publish/template/info/${arg.templateId}`,
                method: 'GET',
            }),
            providesTags: ['PageBuilder'],
        }),
        deleteTemplate: build.mutation<ApiResponse<{ savedTemplates: [], publishedTemplates: [] }>, TemplateResponse>({
            query: (arg: {templateId: number, userId: number, companyId: number}) => ({
                url: `/test/publish/template/delete`, 
                method: "POST", 
                body: {
                    templateId: arg.templateId, 
                    userId: arg.userId, 
                    companyId: arg.companyId, 
                }
            }), 
            invalidatesTags: ['PageBuilder']
        })
    })
})

export const pageBuilder = createSlice({
    name: 'pageBuilder', 
    initialState, 
    reducers: {
        setInit: (state) => {
            state.pageInfo = null;
            state.sections = [];
            state.editor = null;
            state.editState = 1;
            state.selectedComponentType = ''
            state.editingSectionType = ''
            state.deviceType = 'device_default'
        }, 
        setPageInfo: (state, action: PayloadAction<PageInfo>) => {
            state.pageInfo = action.payload;
        },
        setGrapesjsEditor: (state, action: PayloadAction<any>) => {
            state.editor = action.payload;
        }, 
        setUsedEditState: (state, action: PayloadAction<number>) => {
            state.editState = action.payload;
        }, 
        setSelectedComponentType: (state, action: PayloadAction<string>) => {
            state.selectedComponentType = action.payload
        }, 
        setEditingSectionType: (state, action: PayloadAction<string> ) => {
            state.editingSectionType = action.payload
        }, 
        setSections: (state, action: PayloadAction<PageType[]>) => {
            state.sections = action.payload
        }, 
        setNewSectionIndex: (state, action: PayloadAction<number>) => {
            state.newSectionIndex = action.payload
        }, 
        setJobDisplayAs: (state, action: PayloadAction<string>) => {
            state.jobDisplayAs = action.payload
        }, 
        setJobTableColumnFilter: (state, action: PayloadAction<CommonObject>) => {
            state.jobTableColumnFilter = action.payload
        }, 
        setJobFilterColumn: (state, action: PayloadAction<CommonObject>) => {
            state.jobFilterColumn = action.payload
        }, 
        setEditSectionIndex: (state, action: PayloadAction<number>) => {
            state.editSectionIndex = action.payload
        }, 
        setCopiedSectionIndex: (state, action: PayloadAction<number>) => {
            state.copiedSectionIndex = action.payload
        }, 
        setDoneSectionIndex: ( state, action: PayloadAction<number>) => {
            state.doneSectionIndex = action.payload
        },
        setDeviceType: (state, action: PayloadAction<string>) => {
            state.deviceType = action.payload
        }, 
        setEditModalShow: (state, action: PayloadAction<boolean>) => {
            state.showEditListModal = action.payload
        }, 
        setPreviewIndex: (state, action: PayloadAction<number>) => {
            state.previewIndex = action.payload
        }, 


        setUndoStacks: (state, action: PayloadAction<HistoryObject[]>) => {
            state.undoStacks = action.payload
            state.actionIsHuman = true
            state.undoStackIndex += 1
        }, 

        setUndoStackIndex: (state, action: PayloadAction<number>) => {
            state.undoStackIndex = action.payload
        }, 
        setActionIsHuman: (state, action: PayloadAction<boolean>) => {
            state.actionIsHuman = action.payload
        }, 
        setSavedUndoStacks: (state, action: PayloadAction<saveStackObject[]>) => {
            state.savedUndoStacks = action.payload
        }, 
        setCurrentTemplate: (state, action: PayloadAction<TemplateResponse | null>) => {
            state.currentTemplate = action.payload
        }
    }, 
    extraReducers: (builder: ActionReducerMapBuilder<PageBuilderInitialProps>) => {
        builder
        .addMatcher(pageBuilderApi.endpoints.getAllTemplateData.matchFulfilled, (state, action) => {
            state.publishedTemplates = action?.payload?.data?.publishedTemplates;
            state.savedTemplates = action?.payload?.data?.savedTemplates;
        })
        .addMatcher(pageBuilderApi.endpoints.saveSection.matchFulfilled, (state, action) => {
            state.currentTemplate = action?.payload?.data;
        })
    },
})

export const { 

    setInit, 
    setPageInfo, 
    setSections, 
    setNewSectionIndex, 
    setGrapesjsEditor, 
    setUsedEditState, 
    setSelectedComponentType, 
    setEditingSectionType, 
    setJobDisplayAs, 
    setJobTableColumnFilter, 
    setJobFilterColumn, 
    setEditSectionIndex, 
    setCopiedSectionIndex, 
    setDoneSectionIndex, 
    setDeviceType, 
    setEditModalShow, 
    setPreviewIndex, 

    setUndoStacks, 
    setUndoStackIndex, 
    setActionIsHuman, 
    setSavedUndoStacks, 
    setCurrentTemplate, 

} = pageBuilder.actions

export const {
    useSaveSectionMutation, 
    useSaveUploadImageMutation, 
    useDeleteTemplateMutation, 
    useGetAllTemplateDataQuery, 
    useGetTemplateQuery, 
} = pageBuilderApi