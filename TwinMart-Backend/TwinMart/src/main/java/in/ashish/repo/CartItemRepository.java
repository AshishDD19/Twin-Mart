package in.ashish.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ashish.entity.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
}
