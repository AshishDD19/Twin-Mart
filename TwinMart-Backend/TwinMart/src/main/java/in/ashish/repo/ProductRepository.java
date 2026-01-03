package in.ashish.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ashish.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
