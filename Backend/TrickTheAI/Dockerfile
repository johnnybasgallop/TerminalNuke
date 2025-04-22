# === Build Stage ===
FROM maven:3.9.6-eclipse-temurin-17-alpine AS build
WORKDIR /app

# Copy Maven project files
COPY pom.xml .
COPY .mvn .mvn
COPY mvnw .
RUN ./mvnw dependency:go-offline

# Copy source and build
COPY src ./src
RUN ./mvnw package -DskipTests

# === Run Stage ===
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Copy built JAR from previous stage
COPY --from=build /app/target/TrickTheAI-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
