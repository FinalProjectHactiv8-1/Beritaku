import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const covidSlice = createSlice({
  name: "covid",
  initialState: {
    data: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCovidData.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchCovidData.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCovidData.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
  },
});

const apiKey = "db8cd3cb20654bc89250dd3f1960cd28";

export const fetchCovidData = createAsyncThunk("covid/fetchData", async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=COVID-19&apiKey=${apiKey}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});


export default covidSlice.reducer;
