import axios from "axios";
import {
  GetOrdersUsingGETStatusEnum,
  OrderUpdateDtoStatusEnum,
  OrderDetail,
} from "./models";
import { BASE_PATH } from "./runtime";

export default class OrderApi {
  static getOrders(
    status?: GetOrdersUsingGETStatusEnum
  ): Promise<Array<OrderDetail>> {
    return axios.get(`${BASE_PATH}/admin/order`, { params: { status } });
  }

  static getOrder(id: string): Promise<OrderDetail> {
    return axios.get(`${BASE_PATH}/admin/order/${id}`);
  }

  static updateStatus(
    id: string,
    status: OrderUpdateDtoStatusEnum
  ): Promise<OrderDetail> {
    return axios.put(`${BASE_PATH}/admin/order/${id}`, { status });
  }
}
