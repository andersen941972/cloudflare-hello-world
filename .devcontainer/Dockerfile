FROM node:20-bookworm

# Install basic development tools
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    sudo \
    openssh-client \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install uv (Python package manager for MCP servers)
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

# Add uv to PATH for all users
ENV PATH="/root/.cargo/bin:${PATH}"

# Install Wrangler CLI globally
RUN npm install -g wrangler

# Create a non-root user for development
ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

# The node image already has a 'node' user, so we just ensure proper setup
RUN usermod -u ${USER_UID} ${USERNAME} 2>/dev/null || true \
    && groupmod -g ${USER_GID} ${USERNAME} 2>/dev/null || true \
    && mkdir -p /home/${USERNAME}/.local/bin \
    && chown -R ${USERNAME}:${USERNAME} /home/${USERNAME}

# Install uv for the node user as well
USER ${USERNAME}
RUN curl -LsSf https://astral.sh/uv/install.sh | sh

# Set up PATH for the node user
ENV PATH="/home/${USERNAME}/.cargo/bin:/home/${USERNAME}/.local/bin:${PATH}"

# Switch back to root to verify installations
USER root
RUN node --version && \
    npm --version && \
    npx --version && \
    wrangler --version

# Verify uv as node user
USER ${USERNAME}
RUN uv --version

WORKDIR /workspace

CMD ["/bin/bash"]
