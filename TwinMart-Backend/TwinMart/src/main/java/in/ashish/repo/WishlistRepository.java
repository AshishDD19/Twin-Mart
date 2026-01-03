package in.ashish.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ashish.entity.Product;
import in.ashish.entity.User;
import in.ashish.entity.Wishlist;

import java.util.Optional;

public interface WishlistRepository extends JpaRepository<Wishlist, Long> {

    Optional<Wishlist> findByUserAndProduct(User user, Product product);
}
