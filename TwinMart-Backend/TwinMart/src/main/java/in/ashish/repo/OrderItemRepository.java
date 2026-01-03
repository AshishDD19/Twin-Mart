package in.ashish.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ashish.entity.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}