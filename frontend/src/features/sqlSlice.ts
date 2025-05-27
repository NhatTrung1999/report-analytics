import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface ResultQuerySQL {
  [key: string]: unknown;
}

interface SqlState {
  results: ResultQuerySQL[];
  loading: boolean;
  error: string | null;
}

const initialState: SqlState = {
  results: [],
  loading: false,
  error: null,
};

export const fetchQuerySql = createAsyncThunk(
  "sql/fetchQuerySql",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.post(`http://192.168.18.42:3000/api/sql`, {
        query,
      });
      return response.data;
    } catch (error) {
      const err = error as AxiosError<{ message?: string }>;
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch SQL query results"
      );
    }
  }
);

const sqlSlice = createSlice({
  name: "sql",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuerySql.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuerySql.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchQuerySql.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.results = [];
      });
  },
});

export default sqlSlice.reducer;
