import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { rootApi } from '../api';
import { ApiResponse, Option } from '@/types/global';
import type {
  ActivityResponse,
  CandidateParamType,
  CandidateStageParam,
  FiltersResponse,
  HireAndRejectEmailParamType,
  JobAnalyticsResponse,
  JobInfoType,
  PipelineResponse,
} from '@/types/candidate';

interface CandidateInitialProps {
  jobInfo: JobInfoType | null;
  pipeLines: PipelineResponse | null;
  filters: FiltersResponse | null;
  analytics: JobAnalyticsResponse | null;
  activity: ActivityResponse | null;
}

const initialState: CandidateInitialProps = {
  jobInfo: null,
  pipeLines: null,
  filters: null,
  analytics: null,
  activity: null,
};

export const candidateApi = rootApi.injectEndpoints({
  endpoints: build => ({
    getCandidateJobList: build.query<ApiResponse<Option[]>, { companyId: number }>({
      query: (arg: { companyId: number }) => ({
        url: `/candidate/company/jobs/${arg.companyId}`,
        method: 'GET',
      }),
      providesTags: ['Candidate'],
    }),
    setAddCandidate: build.mutation<ApiResponse<void> | unknown, CandidateParamType>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const formData = new FormData();

        formData.append('id', '0');
        formData.append('userId', _arg.userId.toString());
        formData.append('companyId', _arg.companyId.toString());

        for (const id of _arg.jobIds) {
          formData.append('jobIds[]', JSON.stringify(id));
        }

        formData.append('fullName', _arg.fullName.toString());
        formData.append('email', _arg.email.toString());
        formData.append('phoneCode', _arg.phoneCode.toString());
        formData.append('phoneNumber', _arg.phoneNumber.toString());
        formData.append('inviteStatus', _arg.inviteStatus.toString());
        formData.append('photoFile', _arg.photoFile as File);

        if (_arg.cvFile) {
          formData.append('cvFile', _arg.cvFile as File);
        }

        if (_arg.coverLetterFile) {
          formData.append('coverLetterFile', _arg.coverLetterFile as File);
        }

        if (_arg.coverLetterText) {
          formData.append('coverLetterText', _arg.coverLetterText.toString());
        }

        const response = await fetchWithBQ({
          method: 'POST',
          url: '/candidate/save',
          body: formData,
        });

        return response;
      },
      invalidatesTags: ['Candidate'],
    }),
    getPipelineInfo: build.query<ApiResponse<PipelineResponse>, { jobId: number }>({
      query: (arg: { jobId: number }) => ({
        url: `/process/pipeline/${arg.jobId}`,
        method: 'GET',
        params: arg,
      }),
      providesTags: ['Candidate'],
    }),
    getFilterInfo: build.query<
      ApiResponse<FiltersResponse>,
      { jobId: number; pageNumber: number; pageSize: number; sortItem: string; sortDirect: number }
    >({
      query: (arg: { jobId: number; pageNumber: number; pageSize: number; sortItem: string; sortDirect: number }) => ({
        url: `/process/filter`,
        method: 'GET',
        params: arg,
      }),
      providesTags: ['Candidate'],
    }),
    getActivityInfo: build.query<ApiResponse<ActivityResponse>, { jobId: number }>({
      query: (arg: { jobId: number }) => ({
        url: `/process/activity/${arg.jobId}`,
        method: 'GET',
        params: arg,
      }),
      providesTags: ['Candidate'],
    }),
    getAnalyticsInfo: build.query<
      ApiResponse<JobAnalyticsResponse>,
      { companyId: number; jobId: number; year: number }
    >({
      query: (arg: { jobId: number }) => ({
        url: `/process/analytics`,
        method: 'GET',
        params: arg,
      }),
      providesTags: ['Candidate'],
    }),
    getAnalyticsPipelineInfo: build.query<
      ApiResponse<JobAnalyticsResponse>,
      { companyId: number; jobId: number; year: number }
    >({
      query: (arg: { jobId: number }) => ({
        url: `/process/analytics/pipeline`,
        method: 'GET',
        params: arg,
      }),
      providesTags: ['Candidate'],
    }),
    getAnalyticsOvertimeInfo: build.query<
      ApiResponse<JobAnalyticsResponse>,
      { companyId: number; jobId: number; year: number }
    >({
      query: (arg: { jobId: number }) => ({
        url: `/process/analytics/overtime`,
        method: 'GET',
        params: arg,
      }),
      providesTags: ['Candidate'],
    }),
    getAnalyticsEngagedInfo: build.query<
      ApiResponse<JobAnalyticsResponse>,
      { companyId: number; jobId: number; year: number }
    >({
      query: (arg: { jobId: number }) => ({
        url: `/process/analytics/engaged`,
        method: 'GET',
        params: arg,
      }),
      providesTags: ['Candidate'],
    }),
    setUpdateCandidateStage: build.mutation<ApiResponse<void>, CandidateStageParam>({
      query: (arg: CandidateStageParam) => ({
        url: '/process/update/stage',
        method: 'POST',
        body: arg,
      }),
      invalidatesTags: ['Candidate'],
    }),
    setHireAndRejectEmail: build.mutation<ApiResponse<void> | unknown, HireAndRejectEmailParamType>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const formData = new FormData();

        formData.append('userId', _arg.userId.toString());
        formData.append('companyId', _arg.companyId.toString());
        formData.append('candidateId', _arg.candidateId.toString());
        formData.append('jobId', _arg.jobId.toString());
        formData.append('sourceJobStageId', _arg.sourceJobStageId.toString());
        formData.append('destJobStageId', _arg.destJobStageId.toString());
        formData.append('prevStageName', _arg.prevStageName.toString());
        formData.append('nextStageName', _arg.nextStageName.toString());
        formData.append('hireRejectKind', _arg.hireRejectKind.toString());
        formData.append('emailKind', _arg.emailKind.toString());
        formData.append('subject', _arg.subject);
        formData.append('content', _arg.content);
        formData.append('sendStatus', _arg.sendStatus.toString());

        if (_arg.emailReason) {
          formData.append('emailReason', _arg.emailReason);
        }

        if (_arg.ccList) {
          for (const cc of _arg.ccList) {
            formData.append('ccList[]', JSON.stringify(cc));
          }
        }

        if (_arg.bccList) {
          for (const bcc of _arg.bccList) {
            formData.append('bccList[]', JSON.stringify(bcc));
          }
        }

        if (_arg.recipients) {
          for (const recipient of _arg.recipients) {
            formData.append('recipients[]', JSON.stringify(recipient));
          }
        }

        if (_arg.attachFile) {
          formData.append('attachFile', _arg.attachFile as File);
        }

        const response = await fetchWithBQ({
          method: 'POST',
          url: '/process/send/hiredemail',
          body: formData,
        });

        return response;
      },
    }),
  }),
});

export const candidate = createSlice({
  name: 'candidate',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CandidateInitialProps>) => {
    builder.addMatcher(candidateApi.endpoints.getPipelineInfo.matchFulfilled, (state, action) => {
      state.jobInfo = action?.payload?.data?.jobInfo;
      state.pipeLines = action?.payload?.data;
    });
    builder.addMatcher(candidateApi.endpoints.getFilterInfo.matchFulfilled, (state, action) => {
      state.jobInfo = action?.payload?.data?.jobInfo;
      state.filters = action?.payload?.data;
    });
    builder.addMatcher(candidateApi.endpoints.getActivityInfo.matchFulfilled, (state, action) => {
      state.jobInfo = action?.payload?.data?.jobInfo;
      state.activity = action?.payload?.data;
    });
    builder.addMatcher(candidateApi.endpoints.getAnalyticsInfo.matchFulfilled, (state, action) => {
      state.jobInfo = action?.payload?.data?.jobInfo as JobInfoType;
      state.analytics = action?.payload?.data;
    });
  },
});

export const {
  useGetCandidateJobListQuery,
  useLazyGetCandidateJobListQuery,
  useSetAddCandidateMutation,
  useGetPipelineInfoQuery,
  useLazyGetPipelineInfoQuery,
  useSetUpdateCandidateStageMutation,
  useGetAnalyticsInfoQuery,
  useLazyGetAnalyticsInfoQuery,
  useLazyGetAnalyticsPipelineInfoQuery,
  useLazyGetAnalyticsOvertimeInfoQuery,
  useLazyGetAnalyticsEngagedInfoQuery,
  useGetFilterInfoQuery,
  useLazyGetFilterInfoQuery,
  useGetActivityInfoQuery,
  useLazyGetActivityInfoQuery,
  useSetHireAndRejectEmailMutation,
} = candidateApi;
