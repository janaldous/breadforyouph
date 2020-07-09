import {
  OrderControllerApi,
  GetOrdersUsingGETStatusEnum,
  OrderDetail,
  OrderUpdateDtoStatusEnum,
} from "breadforyou-fetch-api";

export default class OrderApi {
  static getOrders(
    status?: GetOrdersUsingGETStatusEnum
  ): Promise<Array<OrderDetail>> {
    const orderApi = new OrderControllerApi();
    return orderApi.getOrdersUsingGET({ status });
  }

  static getOrder(id: string): Promise<OrderDetail> {
    const orderApi = new OrderControllerApi();
    return orderApi.getOrderUsingGET({ id });
  }

  static updateStatus(id: string, status: OrderUpdateDtoStatusEnum) {
    const orderApi = new OrderControllerApi();
    return orderApi.updateOrderUsingPUT({ id, orderDto: { status } });
  }
}
