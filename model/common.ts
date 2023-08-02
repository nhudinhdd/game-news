export interface MetaDataList<T> {
  totalPage: number;
  data: [T];
  code: number;
  message: string;
}

export interface MetaData<T> {
  data: [T];
  code: number;
  message: string;
}
