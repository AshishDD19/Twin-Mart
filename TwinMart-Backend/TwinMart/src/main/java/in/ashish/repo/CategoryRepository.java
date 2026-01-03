package in.ashish.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import in.ashish.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}