import {
  OrderDto,
  OrderControllerApi,
  OrderConfirmation,
  GetOrdersUsingGETStatusEnum,
  OrderDetail,
} from "breadforyou-fetch-api";

export default class OrderApi {
  static postOrder(orderDto: OrderDto): Promise<OrderConfirmation> {
    const orderApi = new OrderControllerApi();
    return orderApi.orderUsingPOST({ orderDto });
  }

  static getOrders(
    status?: GetOrdersUsingGETStatusEnum
  ): Promise<Array<OrderDetail>> {
    const orderApi = new OrderControllerApi();
    return orderApi.getOrdersUsingGET({status});
  }

  static getOrder(id: string): Promise<OrderDetail> {
    const orderApi = new OrderControllerApi();
    return orderApi.getOrderUsingGET({id});
  }
}
